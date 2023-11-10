---
title: "Accessibility Answers: What Can I Do Now for Better Accessibility?"
description: Make changes now for better accessibility.
featuredimg: true
img: ./_src/assets/img/uploads/rawpixel-1057231-unsplash.jpg
imgalt: Woman sitting and raising her hand beside another woman.
date: 2015-03-27T23:05:42+00:00
permalink: /blog/accessibility-answers-what-can-i-do-now-for-better-accessibility/
tags:
  - Accessibility
  - Accessibility Answers
  - Front End Development
---

_When I give presentations on accessibility, I often get one or two questions I've fielded before. I've collected a handful for an ongoing series of posts with my answers. I hope it helps you understand accessibility better._

**If I could do a few basic things in my projects right now, what should they be?**

Start simple. Focus on ensuring users can navigate your site using the keyboard. Make sure you have `:focus` styles where appropriate, and that each style has a reasonable contrast.

Further reading: [Building a Strong Foundation with Keyboard Accessibility](http://themeshaper.com/2015/03/12/keyboard-accessibility/).

Next, make sure each control follows web standards. What do I mean by that? Items that behave like links, buttons and form fields should be just that: `<a>`, `<button>` or `<input>`. Don't make your own interface elements from scratch. Use native elements, which come with accessibility features built in, and enhance from there.

Further reading: [Links Are Not Buttons; Neither Are DIVs and SPANs](http://www.karlgroves.com/2013/05/14/links-are-not-buttons-neither-are-divs-and-spans/).

Lastly, provide a `<label>` element for each form field in your code. Labels allow screen reader users to know what a field is meant to do or what that field needs in order to move on in an interface. Don't make it harder.

Further reading: [Accessible Form Controls](http://webaim.org/techniques/forms/controls) and [Placeholder Attribute is Not a Label](http://www.webaxe.org/placeholder-attribute-is-not-a-label/).

Follow the series [Accessibility Answers](http://davidakennedy.com/tag/accessibility-answers/). Ask me a question via my [contact page](/contact/) or [Twiter](https://twitter.com/DavidAKennedy).

_Image by [rawpixel](https://unsplash.com/photos/Gx_o9dbqf34t)._
