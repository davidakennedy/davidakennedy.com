module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.title,
      parent: (data) => "Reading",
    },
  },
  layout: "page",
  tags: ["readinglists"],
};
