---
title: Site Design, Circa 2023
description: Details around a new site design for davidakennedy.com, circa 2023.
date: 2023-12-03T03:20:16+00:00
permalink: /blog/2023-redesign/
tags:
  - Eleventy
  - Kirby
  - Site Design
---

I refreshed the design of this site recently, focusing more on simplicity and performance.

While it's not radically different from the [previous design, launched in 2020](/blog/2020-redesign/), I wanted to share what I tinkered with and the rationale behind it. I began exploring [Kirby](http://getkirby.com), but stuck with my current [Eleventy](http://11ty.dev) plus [Netlify](https://www.netlify.com) setup for good reason.

## Exploring Kirby

Kirby has a ton of upside if you want a full-featured content management system CMS. It:

- Runs on simple technology (PHP).
- Allows you to write in Markdown.
- Lacks a database for a simpler setup, either locally or in your hosting environment.
- Features a super customizable administration panel for editing content.
- Includes a block editor, similar to WordPress, but Kirby's appears to be less opinionated with it comes to front-end CSS.
- Has good performance for a server side application.

I wanted to use it because I miss having the writing environment separate from the code of the site. It's all mushed together when using a static site generator. You end up getting distracted sometimes, ditching the writing for the endless tweaks you can make on your site.

Other solutions exist for this in the static site generator space, of course. I've looked at many of them, but they all have tradeoffs that don't feel right for me. I got as far with Kirby as writing a [rudimentary import script](https://gist.github.com/davidakennedy/f7697650c828b1e9a5a9a5f85a85b033) and coding part of my site up locally for testing.

I ended up bailing on Kirby because of a few of small details:

- The tag URLs with spaces would have encoded plus (+) sign in them (%2B), and that's not a great URL. Those URLs would need redirects from my previous ones.
- Kirby doesn't support trailing slashes out of the box. You have to redirect a URL via a `.htaccess` file. While it's not a huge performance hit, it's not great because the redirects add up for my site.
- The built-in image image tag used in the editor now supports responsive images (great!), but the images don't resize automatically. I'd have to write code to make images more performant. Possible, but annoying.
- Staying on a static site generator is simpler. You get a content delivery network with Netlify or a similar host without having to pay for an extra service.

## Simpler Eleventy Setup + New Visuals

Inspired by Kirby, I decided to tweak my Eleventy setup to work better for me. I decided that I don't need an editor. I use iA Writer to craft content and could use GitHub.com or GitHub.dev if I wanted to publish on the go. However, if someone created a tool like [Prose](http://prose.io), which looks no longer maintained, that worked with Eleventy, they could take me money.

I made adjustments to make content creation simpler and the site faster:

- Since the last major redesign in 2020, I had switched fonts to Merriweather, which I love. I ditched it in favor of a combination of system fonts for better performance. Plus, I think they work well across different operating systems.
- I added more touches of color. I'll admit that I'm not great at infusing personality into my designs and I tend to like a high contrast, minimalist aesthetic. But I discovered [Reasonable Colors](https://reasonable.work/colors/), and love how flexible and accessible this color system can be.
- I moved images to be inside the same folders as the content it pairs with. That means all my images aren't in one main folder, making it easier to manage images and other related linked content.
- I removed old cruft from my code and fixed typos. This, along with the font switch, [means a faster site](https://lighthouse-metrics.com/lighthouse/checks/50141906-e9d0-469b-b4a1-ea2ff3fdfc0a).

Time to get to work on all those other blog posts drafts…
