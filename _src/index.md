---
title: Just Call Me DK. I'm a design leader focused on user experience, inclusive design and people management.
description: The website for David A. Kennedy, a designer and accessibility advocate.
eleventyNavigation:
  key: Home
  parent: ""
  title: David A. Kennedy
layout: home
---

<div class="h-card">
  <p class="p-note intro">Hi there! I'm <a class="u-url u-uid" href="{{ '/' | url }}"><span class="p-name">David A. Kennedy</span></a>, but my friends call me <span class="p-nickname">DK</span>. I work as a Manager of Design at <a href="https://adhoc.team/">Ad Hoc</a>, focusing on creating inclusive experiences, and helping designers grow. You can reach me <a class="u-email" href="mailto:me@davidakennedy.com">at the usual place</a>.</p>
</div>

I'm an accessibility advocate who loves the open web and open source design and code. I curate a popular newsletter called [Accessibility Weekly](https://a11yweekly.com/). Before working on the web, I wrote words instead of code as a journalist.

<mark><a href="{{ '/about/' | url }}">Find out more about me</a>.</mark>

<hr>

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

<mark><a href="{{ '/projects/' | url }}">Learn more about my side projects</a>.</mark>

<hr>

## Writing Highlights

Speaking of words, I've collected a few of my [favorite posts I've written elsewhere](/tag/selected-writing/). You might enjoy reading them or my favorites from this site.

{% set posts = collections.bestof | reverse %}
{% include "partials/post-list.njk" %}

If that's not enough, here are some of the latest posts form my blog.

{% set posts = collections.posts | head(-5) | reverse %}
{% include "partials/post-list.njk" %}

<mark><a href="{{ '/blog/' | url }}">Read more posts on the blog</a>.</mark>
