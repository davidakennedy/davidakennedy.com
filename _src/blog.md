---
title: Blog
description: Where David A. Kennedy goes to write.
pagination:
  data: collections.posts
  size: 10
  reverse: true
eleventyNavigation:
  key: Blog
  order: 2
layout: blog
permalink: blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html
---

I've penned {{ collections.posts.length }} posts on this blog. You can dive into specific topics on the <a href="{{ '/tags/' | url }}">tags page</a>. Oh, and you can sign up to receive new blog posts via email, if that's your thing. Thanks for reading!
