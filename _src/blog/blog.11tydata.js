export default {
  layout: "post",
  permalink:
    "blog/{% if slug %}{{ slug }}{% else %}{{ title | slugify }}{% endif %}/",
  tags: ["posts"],
};
