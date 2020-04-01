---
title: New Look, Same Feel
description: Another new site design.
date: 2012-11-23T11:53:44+00:00
permalink: /blog/new-look-same-feel/
tags:
  - Site Design
  - WordPress
---

I like to tinker with my own site. I can't help it. 🙂

It has to be this way. I think a developer's personal site should constantly evolve. It hasn't been that long since [my last site refresh](/blog/dk-wordpress-theme-3-0/), however this time I rebuilt everything from the ground up.

You're looking at a new and improved site.

## Experimentation

I experimented with a variety of different solutions beyond [WordPress](http://wordpress.org/) to see if anything would be a better fit. I looked at [PyroCMS](https://www.pyrocms.com/), [Octopress](http://octopress.org/), [Pelican](https://github.com/getpelican/pelican) and [Statamic](http://statamic.com/). The whole [static site generator craze](https://gist.github.com/2254924) has me intrigued. A few designers and developers I respect have made the switch, including [Mark Boulton](http://www.markboulton.co.uk/journal/newblog-newcms) and [Dave Rupert](http://daverupert.com/2012/11/brander-newer/). Ultimately though, I stuck with what I love – WordPress. It just has so much flexibility and support that I can't let that go. Plus, it's just fun to develop with.

## Features

I created the last version of my site as a child theme of [Duster](http://wordpress.org/extend/themes/duster). [Child themes are awesome](/blog/the-why-of-wordpress-themes/), but I wanted more power so I started with [Underscores](http://underscores.me/) and went the custom route this time around.

I kept all of my existing features, including my [projects custom post type and taxonomies](/projects/). But this time I made a [functionality plugin](http://wpcandy.com/teaches/how-to-create-a-functionality-plugin/) to store my post types and other custom theme functionality that needs to be carried over from theme to theme.

New features include:

  * mobile first design, using [Fluid Baseline Grid](http://fluidbaselinegrid.com/) as a starting point. Older browsers get served [Respond.js](https://github.com/scottjehl/Respond) to maintain the responsiveness.
  * Tim Brown's [modular scale technique](http://modularscale.com/scale/?px1=16&px2=4&ra1=1.5&ra2=0). I deviated from a strict baseline grid.
  * the web font [Franklin Gothic URW from Typekit](https://typekit.com/fonts/franklin-gothic-urw). I use Open Sans for my logo.
  * icons from the icon font [IcoMoon](http://icomoon.io/).
  * a footer background pattern from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/light-sketch).
  * a simple set of quotes that display in the footer randomly when a page loads. Right now, all of these are from Benjamin Franklin, because his quotes always make me stop and think, or smile. I'll add more later.

### Design

I wanted the design to reflect something new, but still feel familiar to anyone who has visited my site before. So I kept a black and white with blue color scheme and stuck with a traditional minimal two-column layout.

### Accessibility

I've taken great care to make the site as accessible as possible. I have:

  * included visible skip links.
  * included invisible headings with all of the site's navigation elements.
  * implemented ARIA roles where appropriate.
  * made sure the various color combinations pass both [WCAG 2 AA](http://accessibility.oit.ncsu.edu/tools/color-contrast/accessible-color-palette.php?&colors=ffffff,f4f4f4,525252,333333,141414,eef3fc,19468a,0d2345&main=ffffff&level=AA) and [WCAG 2 AAA](http://accessibility.oit.ncsu.edu/tools/color-contrast/accessible-color-palette.php?&colors=ffffff,f4f4f4,525252,333333,141414,eef3fc,19468a,0d2345&main=ffffff&level=AAA).
  * served up the default font size (16px) in browsers for most areas of the site. Font sizes are served in percentages and ems to maintain fluidity.
  * used JavaScript responsively. It controls the responsiveness in older browsers, the keyboard navigation in photo galleries, the main navigation on small viewports and the fallback on web fonts on older browsers. I've also used [Modernizr](http://modernizr.com/) for feature detection.
  * plans to make the dropdown menus keyboard accessible.

### Next

I'm sure I'll continue to tweak things as I find bugs and ways to improve the site. After all, I did say I liked to tinker.