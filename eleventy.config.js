// Requirements.
import { DateTime } from "luxon";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import CleanCSS from "clean-css";
import { minify } from "terser";
import htmlmin from "html-minifier-terser";
import mdAnchor from "markdown-it-anchor";
import implicitFigures from "markdown-it-image-figures";

// Configuration and plugins.
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed/atom.xml",
    stylesheet: "pretty-atom-feed.xsl",
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "David A. Kennedy",
      subtitle: "Inclusive Design, Open Source and Life.",
      base: "https://davidakennedy.com/",
      author: {
        name: "David A. Kennedy",
      },
    },
  });
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    // output image formats
    formats: ["webp", "jpeg"],

    // output image widths
    widths: [400, 800],

    // optional, attributes assigned on <img> nodes override these values
    defaultAttributes: {
      decoding: "async",
      loading: "lazy",
      sizes: "800px",
    },
  });
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addBundle("css", {
    transforms: [
      async function minifyCSS(content) {
        if (this.type === "css") {
          return new CleanCSS({ sourceMap: true }).minify(content).styles;
        }

        return content;
      },
    ],
  });

  // Our layouts.
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("404", "layouts/404.njk");
  eleventyConfig.addLayoutAlias("blog", "layouts/blog.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("resume", "layouts/resume.njk");

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "LLLL dd yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Filter out certain tags from lists
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) =>
        ["all", "posts", "bestof", "haikus", "readinglists"].indexOf(tag) === -1
    );
  });

  // Return the keys used in an object
  eleventyConfig.addFilter("getKeys", (target) => {
    return Object.keys(target);
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
  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (process.env.ELEVENTY_ENV === "prod" && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        minifyJS: true,
      });
      return minified;
    }
    return content;
  });

  // Minify JS files
  eleventyConfig.addTransform("jsmin", async function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV === "prod" &&
      (this.page.outputPath || "").endsWith(".js")
    ) {
      const minified = await minify(content, {});
      return minified.code;

      return minified;
    }

    // If not an HTML output, return content as-is
    return content;
  });

  // Minify JSON for Schema.org
  eleventyConfig.addFilter("jsonmin", function (code) {
    return JSON.stringify(JSON.parse(code));
  });

  // Get current year for copyright.
  eleventyConfig.addShortcode("copyrightDates", (startYear) => {
    return startYear + " - " + new Date().getFullYear();
  });

  // Used to grab a random array in a data file: taglines.js
  eleventyConfig.addFilter("randomItem", (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  });

  // Pass these directories through.
  eleventyConfig.addPassthroughCopy("_src/assets");
  eleventyConfig.addPassthroughCopy("_src/robots.txt");
  eleventyConfig.addPassthroughCopy("_src/humans.txt");
  eleventyConfig.addPassthroughCopy("_src/web-app-manifest-192x192.png");
  eleventyConfig.addPassthroughCopy("_src/web-app-manifest-512x512.png");
  eleventyConfig.addPassthroughCopy("_src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("_src/favicon-96x96.png");
  eleventyConfig.addPassthroughCopy("_src/favicon.svg");
  eleventyConfig.addPassthroughCopy("_src/favicon.ico");
  eleventyConfig.addPassthroughCopy("_src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("_src/_redirects");
  eleventyConfig.addPassthroughCopy("_src/_headers");
  eleventyConfig.addPassthroughCopy("_src/feed/pretty-atom-feed.xsl");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    typographer: true,
    quotes: "“”‘’",
  })
    .use(mdAnchor, {})
    .use(implicitFigures, {});
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
}
