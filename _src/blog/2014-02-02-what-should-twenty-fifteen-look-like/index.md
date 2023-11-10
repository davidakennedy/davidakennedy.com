---
title: What Should Twenty Fifteen Look Like?
description: Thinking about the next default WordPress theme.
date: 2014-02-02T13:02:32+00:00
permalink: /blog/what-should-twenty-fifteen-look-like/
tags:
  - WordPress
  - WordPress Theming
---

Watching the Twenties, the WordPress default themes, evolve over the last few WordPress releases has been a blast.

Konstantin Obenland wrote a [post about what he'd like to see happen with the next default WordPress theme](http://konstantin.obenland.it/2013/12/19/twenty-fifteen/), Twenty Fifteen:

> But most importantly: Let changes only be in <code>style.css</code>. That’s it! No additional functionality or bloat. If anything, we take unneeded code out. This doesn’t mean it can’t look good. It doesn’t mean it will be less awesome than its predecessors. CSS is a powerful tool, if in the right hands.

Aaron Jorbin followed up with his [own ideas for Twenty Fifteen](http://aaron.jorb.in/blog/2013/12/the-twenty-fifteen-theme/).

> I would like to propose that Twenty Fifteen be a single page app largely done in JavaScript. This will require the addition of the [Rest API the WP API team is building](https://github.com/WP-API/WP-API), but would enable us to demonstrate what is possible for a theme with almost no PHP. Imagine a theme where the only PHP is functions.php and index.php.

The two conversations I've enjoyed seeing spring up around these posts are enabling WordPress Core to support more complex theme features, as read in the comments on Konstantin's post, and developing a content-focused JavaScript app responsibly, as read in the comments on Aaron's post.

What would I like to see in Twenty Fifteen? The simplest architecture possible.

What's that mean? I'd love to see a theme with as few files possible. Most people don't know that [WordPress only requires two theme files](http://codex.wordpress.org/Theme_Development#Basic_Templates). Most theme developers would struggle to make this happen, especially if they're building a full-featured theme. Also, this approach nets little for the end user. However, it would force everyone to [make decisions](http://wordpress.org/about/philosophy/): theme authors and theme users. What do you _really_ need?

Imagine, a theme with less than 10 files. Critics of the WordPress theming process sometimes say its bloated or hard to grasp. What if we pare it down as much as possible?