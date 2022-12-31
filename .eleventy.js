// Requirements.
const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const image = require("@11ty/eleventy-img");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

// Configuration and plugins.
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.setDataDeepMerge(true);

  // Our layouts.
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("blog", "layouts/blog.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("resume", "layouts/resume.njk");

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "America/New_York" }).toFormat(
      "LLL dd yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Filter out certain tags from lists
  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) =>
        ["all", "post", "posts", "bestof", "haikus", "readinglists"].indexOf(
          tag
        ) === -1
    );
  }

  eleventyConfig.addFilter("filterTagList", filterTagList);

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Group posts by year
  // https://github.com/11ty/eleventy/discussions/2630
  eleventyConfig.addFilter("groupByYear", function (pages = []) {
    const pagesMap = {};
    for (const page of [...pages]) {
      const pageYear = page.date.getFullYear();
      const yearlyPosts = pagesMap[pageYear] || [pageYear, []];
      yearlyPosts[1].push(page);
      pagesMap[pageYear] = yearlyPosts;
    }

    return (
      Object.values(pagesMap)
        // Sort the year map in descending order.
        .sort(([year1], [year2]) => year2 - year1)
    );
  });

  // Development filters
  // Adjusts image paths for certain images, like social cards
  eleventyConfig.addFilter("imgPath", function (path) {
    return path.replace("/_src", "");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({ sourceMap: true }).minify(code).styles;
  });

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (process.env.ELEVENTY_ENV === "prod" && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Image shortcode for eleventy-img
  async function imageShortcode(src, alt, caption) {
    let metadata = await image(src, {
      // Fix paths
      urlPath: "/assets/img/build/",
      outputDir: "./_site/assets/img/build/",
      widths: [407, 815, 1630],
      formats: ["jpeg"],
    });

    let imageAttributes = {
      alt,
      sizes: "(max-width: 835px) calc(100vw - 1em), 815px",
      loading: "lazy",
      decoding: "async",
    };

    if (caption !== undefined) {
      return `<figure>${image.generateHTML(
        metadata,
        imageAttributes
      )}<figcaption>${caption}</figcaption></figure>`;
    } else {
      return image.generateHTML(metadata, imageAttributes);
    }
  }

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Get current year for copyright.
  eleventyConfig.addShortcode("copyrightDates", (startYear) => {
    return startYear + " - " + new Date().getFullYear();
  });

  // Pass these directories through.
  eleventyConfig.addPassthroughCopy("_src/assets");
  eleventyConfig.addPassthroughCopy("_src/robots.txt");
  eleventyConfig.addPassthroughCopy("_src/humans.txt");
  eleventyConfig.addPassthroughCopy("_src/android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("_src/android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("_src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("_src/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("_src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("_src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("_src/favicon.ico");
  eleventyConfig.addPassthroughCopy("_src/mstile-150x150.png");
  eleventyConfig.addPassthroughCopy("_src/safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy("_src/site.webmanifest");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    typographer: true,
    quotes: "“”‘’",
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ["md", "njk", "html"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "_src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
