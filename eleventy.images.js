const path = require("path");
const image = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
  function relativeToInputPath(inputPath, relativeFilePath) {
    let split = inputPath.split("/");
    split.pop();

    return path.resolve(split.join(path.sep), relativeFilePath);
  }

  // Image shortcode for eleventy-img
  eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, caption) {
    let metadata = await image(relativeToInputPath(this.page.inputPath, src), {
      // Fix paths
      urlPath: "/assets/media/",
      outputDir: path.join(eleventyConfig.dir.output, "assets/media"),
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
  });
};
