// Requirements.
const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

// Configuration and plugins.
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setDataDeepMerge(true);

  // Our layouts.
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
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

  // Process content in markdown-it.
  const markdownItRenderer = new markdownIt({
    html: true,
    breaks: true,
    typographer: true,
    quotes: "“”‘’",
  });
  eleventyConfig.addFilter("markdownify", (str) => {
    return markdownItRenderer.renderInline(str);
  });

  // Development filters
  const CleanCSS = require("clean-css");
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({ sourceMap: true }).minify(code).styles;
  });

  const Terser = require("terser");
  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log("Terser error: ", minified.error);
      return code;
    }

    return minified.code;
  });

  eleventyConfig.addFilter("imgPath", function (file) {
    return `/assets/img/uploads/${file}`;
  });

  const htmlmin = require("html-minifier");
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Generate image markup.
  // A responsive image helper using Netlify Large Media - image transformation
  // Also not indented because: https://www.11ty.io/docs/languages/markdown/#there-are-extra-and-in-my-output
  eleventyConfig.addShortcode(
    "img",
    (figclass, imgclass, url, alt, caption, width, height, lazy) => {
      return `<figure ${figclass ? `class="${figclass}"` : ""}><img ${
        imgclass ? `class="${imgclass}"` : ""
      } src="/assets/img/uploads/${url}?nf_resize=smartcrop&w=${width}&h=${height}" alt="${
        alt ? alt : ""
      }" width="${width}" height="${height}" ${
        lazy ? `loading="${lazy}"` : ""
      } />${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
    }
  );

  // Generate hero image markup.
  // A responsive image helper using Netlify Large Media - image transformation
  // Also not indented because: https://www.11ty.io/docs/languages/markdown/#there-are-extra-and-in-my-output
  eleventyConfig.addShortcode(
    "respimg",
    (
      figclass,
      imgclass,
      url,
      alt,
      caption,
      ratio,
      srcsetWidths,
      fallbackWidth,
      sizes,
      lazy
    ) => {
      const fetchBase = `/assets/img/uploads/`;
      const fallbackHeight = fallbackWidth * ratio;
      const src = `${fetchBase}${url}?nf_resize=fit&w=${fallbackWidth}&h=${fallbackHeight}`;
      const srcset = srcsetWidths
        .map((width) => {
          const height = width * ratio;
          return `${fetchBase}${url}?nf_resize=fit&w=${width}&h=${height} ${width}w`;
        })
        .join(", ");

      return `<figure ${figclass ? `class="${figclass}"` : ""}><img ${
        imgclass ? `class="${imgclass}"` : ""
      } srcset="${srcset}" sizes="${
        sizes ? sizes : "100vw"
      }" src="${src}" alt="${alt ? alt : ""}" ${
        lazy ? `loading="${lazy}"` : ""
      }>${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
    }
  );

  // Get current year for copyright.
  eleventyConfig.addShortcode("copyrightDates", (startYear) => {
    return startYear + " - " + new Date().getFullYear();
  });

  // Our collections of content.
  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

  eleventyConfig.addCollection("nav", function (collection) {
    return collection.getFilteredByTag("nav").sort(function (a, b) {
      return a.data.navorder - b.data.navorder;
    });
  });

  // Pass these directories through.
  eleventyConfig.addPassthroughCopy("_src/assets");
  eleventyConfig.addPassthroughCopy("_src/favicon.ico");
  eleventyConfig.addPassthroughCopy("_src/robots.txt");
  eleventyConfig.addPassthroughCopy("_src/humans.txt");
  eleventyConfig.addPassthroughCopy("_src/site.webmanifest");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    typographer: true,
    quotes: "“”‘’",
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
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
