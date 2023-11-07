---
title: "Accessibility Answers: How Do I Handle JavaScript and Accessibility"
description: JavaScript isn't the enemy.
featuredimg: true
img: ./_src/assets/img/uploads/rawpixel-1057231-unsplash.jpg
imgalt: Woman sitting and raising her hand beside another woman.
date: 2015-04-08T23:12:04+00:00
permalink: /blog/accessibility-answers-how-do-i-handle-javascript-and-accessibility/
tags:
  - Accessibility
  - Accessibility Answers
  - Front End Development
---

_When I give presentations on accessibility, I often get one or two questions I’ve fielded before. I’ve collected a handful for an ongoing series of posts with my answers. I hope it helps you understand accessibility better._

**How do I handle javascript and accessibility?**

Like everything else. It's that easy. You can follow the [same accessibility principles](http://webaim.org/articles/pour/), making your web pages or applications perceivable, operable, understandable and robust. JavaScript changes nothing in that regard. Accessibility and JavaScript get a bad reputation because of some misconceptions. First, most people who use screen readers [typically have JavaScript enabled](http://webaim.org/projects/screenreadersurvey5/#javascript), not the other way around. Also, all modern accessibility guidelines allow you to require JavaScript, so long as the scripted content works within the guidelines. WCAG 1.0 required interfaces to work properly without scripting enabled, but this isn't the case anymore.

Further reading: [Accessible JavaScript](http://webaim.org/techniques/javascript/).

That said, you should keep these things in mind:

- Use semantic HTML as your base. Employ native controls that work well with all devices, like `<a>`, `<button>` or `<input>`.
- Follow progressive enhancement, and use JavaScript to aid in the functionality of your interfaces. Whenever possible, try to make your interfaces work at a basic level minus JavaScript. Think of it like that old, beat-up car that just never quits, no matter the conditions. We all appreciate cars like that.
- Use device dependent event handlers: **onFocus**, **onBlur**, **onSubmit**, **onClick**. These will work with a variety of devices and input methods.
- Implement [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) where applicable to communicate context, like change of state, to assistive technology.

Further reading: [Modern Web Accessibility with JavaScript & WAI-ARIA](http://pauljadam.com/moderna11y/).

Further reading: [Practical ARIA Examples](http://heydonworks.com/practical_aria_examples/).

Further watching: [A Web for Everybody.](http://marcysutton.com/talk/a-web-for-everybody-smashing-conf-whistler/)

Follow the series [Accessibility Answers](http://davidakennedy.com/tag/accessibility-answers/). Ask me a question via my [contact page](/contact/) or [Twiter](https://twitter.com/DavidAKennedy).

_Image by [rawpixel](https://unsplash.com/photos/Gx_o9dbqf34t)._
