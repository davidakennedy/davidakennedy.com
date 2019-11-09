---
title: Blog
layout: layouts/blog.njk
templateClass: archive-template
tags:
  - nav
navtitle: Blog
navorder: 3
pagination:
  data: collections.posts
  size: 10
  reverse: true
permalink: blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html
---

I've penned {{ collections.posts.length }} posts on this blog. You can dive into more topics on the <a href="{{ '/tags/' | url }}">tags page</a>. Enjoy the blog!
