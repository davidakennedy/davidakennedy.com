---
title: Lessons from Building an Accessible WordPress Theme
description: A summary of a talk I gave at WordCamp Lancaster in 2014.
date: 2014-07-08T10:00:47+00:00
permalink: /blog/accessible-wordpress-theme-lessons/
tags:
  - Accessibility
  - Accessible WordPress Theming
  - Accessible Zen
  - WordPress
  - WordPress Theming
  - Work
---

_This post is a summary of a [talk I gave at WordCamp Lancaster](http://davidakennedy.github.io/wclc2014/) in March, 2014._

A phone call that lasted less than five minutes started my obsession with accessibility.

## Dave, Meet Accessibility

During my first few weeks on the job at [The Arc](http://www.thearc.org/) as Online Communication Manager, I spoke with one of our board members who told me he was having trouble using our newly redesigned website. He liked the new one much better than the old one, he said, but still struggled with a few key areas on the site. He rattled them off as I scribbled on a notepad.

After we hung up the phone and I digested the conversation, I realized I only knew how to fix one of the handful of items that he listed off to me. He was blind and used a screen reader to navigate the web. I'd never used one, but knew I had to learn so I could build a better experience for not just him, but anyone who came to our sites. I followed [Jeffrey Zeldman](http://www.zeldman.com/), the father of web standards, and understood the very basics of accessibility, but didn't really know how challenging and rewarding web accessibility could be. I dug in. (Need to know more about what accessibility is? [Read WebAIM's introduction](http://webaim.org/intro/).)

## WordPress + Accessibility

A few years later, I wanted to give back to the web and WordPress. I honed so much of my front end development and accessibility skills off of opening up WordPress themes to see how they worked. So it made sense to build my own theme and release it under the [GPL, like WordPress](http://wordpress.org/about/license/). How would I make my theme unique among the many already out there? I would bake accessibility in from the start, of course! And I would learn a lot along the way.

### Accessible Zen

I released [Accessible Zen](http://wordpress.org/themes/accessible-zen/) in the fall of 2013 as a simple, accessible WordPress theme modeled after the themes I've admired on [Zen Habits](http://zenhabits.net/), built especially for personal bloggers. It proved to be a ton of hard work, but worth it. Here's what I learned during the process:

#### Keep Your Goal in Mind

I set out to build a simple, accessible WordPress theme, but it turns out that's hard when the web world keeps changing and tossing out new ideas at you every day. A theme design could go in a trillion directions. The one way that kept me on track was just opening up zenhabits.net in a browser once a week to bask in its simplicity. It served as a visual reminder.

**Lesson**: If you love your goal, stick with it.

#### Good Accessibility is Undetectable

Why is accessibility hard? The answers to web accessibility challenges and problems aren’t always clear. So much of the right approach often depends on the context of the website or web application in question. Plus, you can't really see accessibility, like a design or content – whether it's done well or not. Accessible Zen is built on the back of [Underscores](http://underscores.me/). The underlying code isn't much different and when I look at Accessible Zen, I can't see what _makes_ it accessible.

**Lesson**: Love your starter theme of choice and use it.

####  Small Details Make a Big Difference

In accessibility, details matter. When creating Accessible Zen, I focused a lot of attention on things like color contrast, skip nav links, default link styling and read more links. All these small things helped make the theme much more accessible.

**Lesson**: Small stuff needs love too.

#### Recognize What You're Doing

You're making something!

I spent countless hours crafting the design and code for Accessible Zen. I wasn't sure if anyone would like it, download it or use it. But shortly after I released one of the beta versions, I saw [this tweet from Shane Jackson](https://twitter.com/jack728/status/351753432673165313):

> Thank you. SO far, I'm loving this one!!!

I could have stopped right there and the theme would have succeeded in my mind.

**Lesson**: Find someone who loves your work.

Today, Accessible Zen has been downloaded a few thousand times and is used by my friends and even a company made of up of [assistive technology professionals who are blind](http://blindaccesstraining.com/). Not bad for something born out of a five-minute phone call.

If you're interested in making WordPress more accessible, [join the WordPress Accessibility team](http://make.wordpress.org/accessibility/join-us/).