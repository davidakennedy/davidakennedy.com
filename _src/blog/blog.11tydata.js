module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.title,
      parent: (data) => "Blog",
    },
  },
  layout: "post",
  permalink:
    "blog/{% if slug %}{{ slug }}{% else %}{{ title | slugify }}{% endif %}/",
  tags: ["posts"],
};
