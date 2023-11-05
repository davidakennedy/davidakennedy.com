---
title: New Design, New Architecture
description: Details around a new site design for davidakennedy.com, circa 2020.
date: 2020-07-21T21:14:23+00:00
permalink: /blog/2020-redesign/
tags:
  - Eleventy
  - Site Design
  - WordPress
---

More than a decade after I launched this site on WordPress.com, I've moved away from the world's most popular CMS.

My site now runs on Eleventy, hosted with Netlify.

While that may be the most newsworthy item in this incarnation, it's not the most important. I made this change because I felt the need to get out of my comfort zone. After working with WordPress for most of my career, I don't use it [at my current job](/blog/joining-ad-hoc/). That excited and terrified me at the same time. A new stack here would help me learn something different and force me to broaden my tool selection. That's not to say I'm not [thankful for WordPress](/blog/dear-wordpress/). I forged a lot of my web skills because of it.

## A Long Road

This redesign started in 2018 and plodded along through several iterations. I planned to stick with WordPress and its forthcoming Gutenberg editor. However, the new job had me no longer thinking WordPress-first. Static site generators have intrigued me since I worked in the U.S. government the first time. I remember reading about the [Healthcare.gov launch being CMS-free](https://medium.com/devseed/launching-healthcare-gov-28fe5df7d0f2). While I wouldn't do that in all situations, I saw the advantages. It's just me publishing on my site and I don't need much of the power that the WordPress block editor gives me. Plus, if I picked a JavaScript static site generator, it could be a way to write more JavaScript.

My choice, [Eleventy](https://www.11ty.dev/), works with Markdown. I wanted to embrace it with this move because I've started to write more with [IA Writer](https://ia.net/writer). Eleventy doesn't force you into one way of working either, supporting many different template engines. It requires little configuration to work, but you can configure much of it too. Lastly, its community emphasizes accessibility and performance, something I believe in at my core.

## Undesigned

I set out to create a more bright, enthusiastic design, but went for [an old standard](https://github.com/davidakennedy/davidakennedy.com/commit/935c33a0fa9d5185070a6dbc009b2e5f515ab0e7). Black, white and high contrast. It's like other designs I've created here and gravitated toward in the past. [Cooper Hewitt](https://www.cooperhewitt.org/open-source-at-cooper-hewitt/cooper-hewitt-the-typeface-by-chester-jenkins/) by Jester Jenkins stands out as the headline font, providing some punch. You can see a dash of color on hover and focus when interacting with links and buttons. I like it. Simple, fast, bold.

## Housekeeping

I took the slow and steady approach, hoping this will be my site's architecture for the next decade.

- I used a [WordPress plugin](https://github.com/benbalter/wordpress-to-jekyll-exporter) to export everything, and get front matter in shape.
- I decided to drop comments, but may bring them back in the future.
- I deleted a handful of irrelevant posts. These photo gallery or single photo posts I tried on the site didn't stick.
- I went through all my content, including images, and tidied things up.
- I kept the build pipeline simple, letting Eleventy do the work of minifying it.

## What's Next

I have a punch list to keep working through for the future. Things like a print stylesheet, offline support and site search. Without everything that WordPress gave me, I learned more. For example, I now know more about `srcset` than I ever did. I wrote that code myself this time. Not having the vast theme and plugin directories as a fallback has slowed me down. That's a good thing. I ask more questions of myself. I've also missed conveniences too. I spent way too much time figuring out how to best support pretty quotes.

## Onward

So far, I'm enjoying what I've made. Handcrafted HTML, CSS and JavaScript. Here's to another decade of learning, growing and putting thoughts on the web.
