---
title: Blog
tags:
  - nav
navtitle: Blog
navorder: 3
pagination:
  data: collections.posts
  size: 10
  reverse: true
layout: layouts/blog.njk
templateClass: archive-template
permalink: blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html
---

I've penned {{ collections.posts.length }} posts on this blog. You can dive into specific topics on the <a href="{{ '/tags/' | url }}">tags page</a>. Oh, and you can sign up to receive new blog posts via email, if that's your thing. Thanks for reading!
