export default {
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.title,
      parent: (data) => "Haikus",
    },
  },
  layout: "page",
  tags: ["haikus"],
};
