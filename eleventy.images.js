const path = require("path");
const getImageSize = require("image-size");
const image = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
  function relativeToInputPath(inputPath, relativeFilePath) {
    let split = inputPath.split("/");
    split.pop();

    return path.resolve(split.join(path.sep), relativeFilePath);
  }

  // Image shortcode for eleventy-img
  eleventyConfig.addAsyncShortcode(
    "image",
    async function imageShortcode(src, alt, caption) {
      let defaultImageDimensions = getImageSize(
        relativeToInputPath(this.page.inputPath, src)
      );
      let defaultImageWidth = defaultImageDimensions.width;
      let widths;
      defaultImageWidth < 800
        ? (widths = ["auto"])
        : (widths = [400, 800, 1600]);
      let metadata = await image(
        relativeToInputPath(this.page.inputPath, src),
        {
          // Fix paths
          urlPath: "/assets/media/",
          outputDir: path.join(eleventyConfig.dir.output, "assets/media"),
          widths: widths,
          formats: ["jpeg"],
        }
      );

      let imageAttributes = {
        alt,
        sizes: "800px",
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
  );

  // Image shortcode for eleventy-img
  eleventyConfig.addAsyncShortcode(
    "featuredimage",
    async function featuredimageShortcode(src, alt, caption) {
      let defaultImageDimensions = getImageSize(
        relativeToInputPath(this.page.inputPath, src)
      );
      let defaultImageWidth = defaultImageDimensions.width;
      let widths;
      defaultImageWidth < 800
        ? (widths = ["auto"])
        : (widths = [400, 800, 1600]);
      let metadata = await image(
        relativeToInputPath(this.page.inputPath, src),
        {
          // Fix paths
          urlPath: "/assets/media/",
          outputDir: path.join(eleventyConfig.dir.output, "assets/media"),
          widths: widths,
          formats: ["jpeg"],
        }
      );

      let imageAttributes = {
        alt,
        sizes: "800px",
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
  );
};
