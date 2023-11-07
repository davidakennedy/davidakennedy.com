---
title: "Accessibility Answers: How Do I Handle Alt Attributes"
description: Writing good alt text takes careful consideration.
featuredimg: true
img: ./_src/assets/img/uploads/rawpixel-1057231-unsplash.jpg
imgalt: Woman sitting and raising her hand beside another woman.
date: 2015-05-03T23:58:17+00:00
permalink: /blog/accessibility-answers-how-do-i-handle-alt-attributes/
tags:
  - Accessibility
  - Accessibility Answers
  - Front End Development
---

_When I give presentations on accessibility, I often get one or two questions I’ve fielded before. I’ve collected a handful for an ongoing series of posts with my answers. I hope it helps you understand accessibility better._

**How do I handle alt attributes?**

Alt attributes can trip up even the most seasoned web worker. But do them right, and they make a huge difference to screen reader users.

I like this table from an [article by Whitney Quesenbery](http://uxpamagazine.org/make-your-presentations-accessible/).

<table>
<tr>
<th scope="col">
<strong>If the image contains…</strong>
</th>

<th scope="col">
<strong>The alt text should…</strong>
</th>
</tr>

<tr>
<td>
Text
</td>

<td>
Repeat the text
</td>
</tr>

<tr>
<td>
Visual information
</td>

<td>
Explain it
</td>
</tr>

<tr>
<td>
Sensory information
</td>

<td>
Describe it
</td>
</tr>

<tr>
<td>
Nothing new
</td>

<td>
Keep it <em>very</em> short<br /> (if you can’t make it “null”)
</td>
</tr>
</table>

If you want more explanation, check out the [W3C's alt decision tree](http://www.w3.org/WAI/tutorials/images/decision-tree/).

All images should have an alt attribute, even if it's empty or null, like: `alt=""`.

Follow the series [Accessibility Answers](/tag/accessibility-answers/). Ask me a question via my [contact page](/contact/) or [Twiter](https://twitter.com/DavidAKennedy).

_Image by [rawpixel](https://unsplash.com/photos/Gx_o9dbqf34t)._
