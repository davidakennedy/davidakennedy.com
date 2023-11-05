---
title: "Icon Font Text Alternatives: Don't Forget Them"
description: A tip when using font icons.
date: 2014-09-18T09:00:12+00:00
permalink: /blog/icon-font-text-alternatives/
tags:
  - Accessibility
  - Front End Development
---

In a world where we need to support screens of all sizes and resolutions and be as future-friendly as possible, many a designer and developer have turned to [icon fonts](http://css-tricks.com/html-for-icon-font-usage/).

They're awesome! And certainly come in handy, especially depending on what browsers you support and whether or not you can [use SVGs](http://css-tricks.com/using-svg/). It's important to remember when using them, you need to [think about accessibility](http://filamentgroup.com/lab/bulletproof_icon_fonts.html).

## The Problem

I see icon fonts without text alternatives all the time in my accessibility testing. If you're using an icon font for a purpose beyond just decoration, and it conveys content, you need a text alternative.

```html
<ul>
  <li class="icon-twitter">
    <a href="http://twitter.com/myprofile"></a>
  </li>
</ul>
```

Often, the `li` will have use `:before` and have some CSS attached to it displaying the icon font. Many designers and developers then rejoice as lovely icons look, well lovely, at any size on any screen.

_**But**_.

This is a link. It has no link text. We've essentially done what's equal to putting an image inside of a link without an alternative text attribute.

- The link uses only icon fonts inside the `<a>`, but icon fonts are not announced by screen readers.
- The `title` attribute may be intended for screen readers, but it's not announced by default by screen readers either, and it's really only useful for users with a mouse. See this post for [more info on the `title` attribute](http://www.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/).
- When a screen reader announces these links, it says: &#8220;Link&#8221;, which isn't descriptive and doesn't tell the user what the link does or where it goes.

_**Bummer. But wait!**_

## The Solution

We can fix this, and easily.

- Links should always have link text.
- Adding a `screen-reader-text` class that would be hidden off-screen, maintains the design of having the icon only, but provides a text alternative. Right now, the best method for hiding text via CSS is the [clip method](https://developer.yahoo.com/blogs/ydn/clip-hidden-content-better-accessibility-53456.html).

The markup might look like this:

```html
<ul>
  <li class="icon-twitter">
    <a href="http://twitter.com/myprofile">
      <span class="screen-reader-text">Follow me on Twitter</span>
    </a>
  </li>
</ul>
```

Now, a screen reader user hears what that link is for and where it goes. It says: "Link: Follow me on Twitter." They just might follow you on Twitter too!

It's easy to forget small, but important details like this, but also easy to fix.

### Other Helpful Blog Posts

- [Bulletproof Accessible Icon Fonts](http://filamentgroup.com/lab/bulletproof_icon_fonts.html) (The way I outline above is just one way to use icon fonts responsibly. This post has more methods.)
- [Using the HTML title Attribute](http://www.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/) (It's not as handy as you might think.)

**Update**: January 16, 2015 – Thanks to a [nudge from Ted Drake](https://twitter.com/ted_drake/status/556131982501883904), I clarify the best method for hiding text via CSS.
