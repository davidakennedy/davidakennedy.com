// Requirements.
const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginImages = require("./eleventy.images.js");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

// Configuration and plugins.
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginImages);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.setDataDeepMerge(true);

  // Our layouts.
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("404", "layouts/404.njk");
  eleventyConfig.addLayoutAlias("blog", "layouts/blog.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("resume", "layouts/resume.njk");

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "LLLL dd yyyy"
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

  // Create an array (collection) of all tags
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
  // Minify CSS
  async function minifyCSS(content) {
    if (this.type === "css") {
      return new CleanCSS({ sourceMap: true }).minify(content).styles;
    }

    return content;
  }

  eleventyConfig.addPlugin(bundlerPlugin, {
    transforms: [minifyCSS],
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

  // Get current year for copyright.
  eleventyConfig.addShortcode("copyrightDates", (startYear) => {
    return startYear + " - " + new Date().getFullYear();
  });

  // Print build time
  // https://www.aleksandrhovhannisyan.com/blog/eleventy-build-info/
  eleventyConfig.addGlobalData("buildInfo", () => {
    const now = new Date();
    const timeZone = "UTC";
    const buildTime = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone,
    }).format(now);

    return {
      time: {
        raw: now.toISOString(),
        formatted: `${buildTime} ${timeZone}`,
      },
    };
  });

  // Used to grab a random array in a data file: taglines.js
  eleventyConfig.addFilter("randomItem", (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
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
  eleventyConfig.addPassthroughCopy("_src/_redirects");
  eleventyConfig.addPassthroughCopy("_src/_headers");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    typographer: true,
    quotes: "“”‘’",
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

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
