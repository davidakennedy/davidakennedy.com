---
title: Just Call Me DK
description: The website for David A. Kennedy, a designer and accessibility advocate.
eleventyNavigation:
  key: Home
  order: 1
layout: layouts/home.njk
templateClass: home-template
permalink: index.html
---

I'm an accessibility advocate who loves the open web and open source design and code. I curate a popular newsletter called [Accessibility Weekly](https://a11yweekly.com/). Before working on the web, I wrote words instead of code as a journalist.

## What I Do as a Designer

I have more than a decade of design and front-end development experience, spanning non-profits, start-ups and government agencies. The connecting line in my work has been a knack for understanding where people are coming from, running toward "sticky" problems and having an accessibility-first mindset.

I approach my work through a few principles:

- **Stay curious**. Progress happens because of new questions or questions asked in a different way. Keep at it.
- **Be the glue**. Be present, and don't take up space. Fill the gaps.
- **Apply constant, intelligent pressure**. Magic doesn't exist. Everything worthwhile gets created because people show up every day and do the boring stuff.

### My Interests

- Working in the open with open source design and code
- Creating inclusive and accessible experiences
- Helping people level up
- Building healthy teams and cultures that foster growth

## Writing Highlights

Speaking of words, I've collected of few of my favorite posts I've written on this site and elsewhere. You might enjoy reading them.

{% set posts = collections.bestof | reverse %}
{% include "partials/post-list.njk" %}

If that's not enough, here are some of the latest posts form my blog.

{% set posts = collections.posts | head(-5) | reverse %}
{% include "partials/post-list.njk" %}

You can also [follow me on Twitter](https://twitter.com/davidakennedy).
