---
title: Testing for Web Accessibility in 60 Seconds
description: New to accessibility with no time. No problem, this can help.
featuredimg: true
image: alarm-clock-gold-hands-of-a-clock-1778.jpg
imgalt: Alarm clock showing second hand.
date: 2014-10-31T13:00:00+00:00
permalink: /blog/web-accessibility-in-60-seconds/
tags:
  - Accessibility
  - Front End Development
  - Web Development
---

You want to make your website more accessible, but you don't know where to start. If you have 60 seconds, I can help.

Recently, I gave a presentation on [how to test for web accessibility with free tools](http://davidakennedy.com/2014/09/12/a-workflow-for-testing-web-accessibility-with-free-tools/). That was the 30 minute version, but you can also get a broad overview of a site's accessibility quickly. It won't tell you everything you want to know, but it will give you a baseline. Use it as you develop your site or application.

## Focus on the Basics

  1. Install the [Wave Toolbar or Chrome Extension](http://wave.webaim.org).
  2. Use Wave to check your page structure using its &#8220;Outline&#8221; feature. Do you have a [reasonable heading structure?](http://webaim.org/techniques/semanticstructure/)
  3. Next, also using Wave, turn off CSS. Does your [linear source order](http://webaim.org/techniques/screenreader/#linearization) make sense?
  4. Again, with Wave, test for any errors. Your images should have [alt attributes](http://webaim.org/techniques/alttext/) ([icon fonts too](http://davidakennedy.com/2014/09/18/icon-font-text-alternatives/)). Your clickable elements should be [links or buttons](http://webaim.org/techniques/keyboard/#problems) and your form elements [should have labels](http://webaim.org/techniques/forms/#labels).
  5. Next, test for [keyboard accessibility](http://webaim.org/techniques/keyboard/) by tabbing through your page or application. Can you get to everything with just a keyboard. Visually, can you see where you are on the page?

If you have any time left, start fixing bugs. 🙂 You'll probably find some, and that's okay. What you did doesn't matter as much as what you do next.

_The information I shared here isn't new. Terrill Thompson wrote about his own [10-second accessibility test](http://terrillthompson.com/blog/229/). Derek Featherstone penned a post about how to be a [keyboard accessibility super hero](http://simplyaccessible.com/article/keyboard-superhero/)._

_Image courtesy of [Pexels.com](http://www.pexels.com/photo/1778/)_.