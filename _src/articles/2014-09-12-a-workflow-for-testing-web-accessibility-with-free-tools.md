---
title: A Workflow for Testing Web Accessibility with Free Tools
description: How I test for accessibility with free tools.
date: 2014-09-12T23:55:24+00:00
permalink: /blog/a-workflow-for-testing-web-accessibility-with-free-tools/
tags:
  - Accessibility
  - Front End Development
---

Learning how to test for web accessibility can be overwhelming, even for the most experienced web worker. However, if you approach the testing bit by bit throughout the creation of your project, it becomes more manageable.

Plus, since you'll be attacking accessibility from the beginning, you're naturally planning for it. That means you have a much better opportunity to create a website or web application for everyone, rather than one that frustrates some users, causes matainence problems for you or your team and potentially puts you at risk legally.

## Introduction

In this post, inspired by my talk at the [Code(Her) Conference](http://codeherconference.com/), I'll lay out a simple workflow for testing your website or web application for accessibility with free tools while building it. The worflow isn't a secret or anything groundbreaking. The W3C [recommends much of it already](http://www.w3.org/WAI/eval/preliminary), but I add a step or two, talk about order and importance of each step.

I've created a simple website – [a11y.me](http://a11y.me) that has all of the resources I mention here, plus many more. Use it, and feel free to suggest new tools by opening an [issue on Github](https://github.com/davidakennedy/a11y.me).

Before we dive into a testing workflow, you should be familiar with the [Web Content Accessibility Guidelines 2.0](http://www.w3.org/WAI/intro/wcag). These guide much of the workflow, especially the [broad principles that form the guidelines](http://www.w3.org/WAI/intro/people-use-web/principles). It might also be helpful to know [how people with disabilities use the web](http://www.w3.org/WAI/intro/people-use-web/Overview).

Thinking about accessibility early on in your design process can pay off in a big way. WebAIM has a simple, informative [infographic geared toward designers](http://webaim.org/resources/designers/). It touches on many important principles of an accessible website or application.

This workflow won't cover everything you would need to do for a thorough accessibility audit, but it will expose you to some of the more important things to check for when it comes to web accessibility. Hopefully, once you develop a ryhthm, you can do all these checks in 30 minutes or less. However, ideally you're doing a handful of them as you design or build new interfaces.

## Automate, Automate, Automate

Let a few robots do some of the work for you. I like to start out using three automated tools that can help identify large trouble spots that you may need to focus on as you move forward in your project.

First, I run the HTML and CSS of a page through the W3C validators.

- [HTML Validator](http://validator.w3.org/)
- [CSS Validator](http://jigsaw.w3.org/css-validator/)

You'll want to look for any obvious errors. Sometimes, malformed HTML and CSS can lead to accessibility issues. You may not be able to have perfectly validated code and that's okay, but make sure any errors aren't causing issues elsewhere.

Next, I like to use two accessibility testing tools that can spot problems in your code. The first is an extension created by Google for Chrome called [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en). From the description:

> This extension will add an Accessibility audit, and an Accessibility sidebar pane in the Elements tab, to your Chrome Developer Tools.
>
> To use the audit: go to the Audits tab, select the Accessibility audit, and click Run. The audit results will appear as a list of rules which are violated by the page (if any), with one or more elements on the page shown as a result for each rule.

This tool outputs text in the Audits tab of the Chrome Developer Tools. It's fairly accurate and a great way to see potential accessibility barriers. You can use the results to take a deeper dive into problems later in your testing.

Next on our automation tour, I like to use [Wave](http://wave.webaim.org/). The web version takes a URL, processes it and gives you all kinds of data on your site page or application. Much like the Accessibility Developer Tools for Chrome, this can help you get a broad picture of where your problems lie. Some find it more helpful because it includes visual icons and represents accessibility features like WAI-ARIA roles nicely.

Careful though, the web version does _not_ process JavaScript. If you need that, you can use Wave's equally awesome [toolbar add-on for Firefox](http://wave.webaim.org/toolbar/).

Next, we dive into some of these details. It's important to mention that from here on out, the order in which you do these isn't imprtant. I like to run the automated checks first for help with the big picture and run the page through a screen reader last to help conform things. However, the items in between can be moved around. Maybe you're only performing one or two at a time while you work on a specific component. That works too!

## We All Like Titles

Now that we have a good overview of what's happening on our page, we can do one of the easiest checks of all. Look at the page title. You can find them in the `title` tag in the `head` element. They're used by screen readers, search engines, browsers and other technology on the web. A good page title provides an overview of what the page is about and gives context to users.

## ALT Rock

All images need an `alt` attribute so screen readers and other assistive technology can describe them. The Wave tool works perfectly for seeing which images have one, what it says and which ones lack it. Alternative text can vary widely from image to image on a site, all depending upon the context of the content around it. WebAIM's [alternative text](http://webaim.org/techniques/alttext/) article explains everything well.

## Heads Up

Making sure a page has headings is another easy thing to check. You can use the Wave tool for this. It allows you to see a page's structure without page styles. At the mininium, a page should have at least one headings and it/they should be marked up like a heading. Example:
`<h1>My Heading</h1>`

## Color Me Bad

Finding the perfect color combinations that are both accessible and harmonize with a design vision can be challenging. However, if you think about accessibility early, stay flexible and experiment, it can done. My three favorite colors tools all come out of the same place: [North Carolina State University's Accessibility Department](http://accessibility.oit.ncsu.edu/).

- For creating an accessible color palette, check out the [Color Palette Accessibility Builder](http://accessibility.oit.ncsu.edu/tools/color-contrast/). You can enter colors by their hex code values and determine if the color comibinations (background and foreground) meet WCAG guidelines.
- For pulling colors from an existing web page or application for analysis in the Color Palette Accessibility Builder, check out the [Color Extractor](http://accessibility.oit.ncsu.edu/tools/color-extractor/).
- For analyzing the color combinations on a full web page or parts of a web page, you'll want to check out the [Color Contrast Analyzer for Chrome](http://accessibility.oit.ncsu.edu/tools/color-contrast-chrome/). It does two things that many other color analysis tools do not: You can check text over top of background images or gradients, analyze text in images.

Each of these tools has unique strengths, depending on which part of the design process you're in. Matthieu Faure created my other favorite color tool, called the [Tanaguru Contrast-Finder](http://contrast-finder.tanaguru.com/). With this tool, you can insert a hex value for a color, and if it does not meet WCAG standards, it will suggest other colors. Perfect when you need a bit of accessible inspiration!

## Can You Make It Bigger?

For this next check, you don't actually need any special tools. It's always a good idea to increase the size of your text by at least one and half times to check if your text _can_ be resized and whether or not your design breaks down.

Some users need to change text size and other aspects of text display: font, space between lines, and more.

[WebAIM](http://webaim.org/techniques/fonts/#font_size) says:

> For development purposes, it is best to use relative units (such as percents or ems) to specify font sizes rather than absolute units (such as pixels or points). This provides much flexibility in modifying the visual presentation using CSS. For accessibility, because modern browsers adequately resize text regardless of how the size has been defined, it is not vital that text sizes be defined in relative sizes.

This is solid advice, but if you use relative font sizes, you'll respect a user's preferences and your adjustments will be easier within responsive design.

## Look Ma, No Mouse

I love looking at a site or application's keyboard navigability and visual focus. Often, it's the one thing I do if I don't have time to do any other testing. Like the last test, you don't need any special tools.

Test this in Chrome since you do not have to enable any special options for it to work. Simple open a web page and press the tab key. You should be moving forward through the page. Pressing the shift key plus tab moves you backward.

## Label Me, Please

Lack of form labels represent one of the most common accessibility errors I see in my own accessibility testing. Fortunately, it's one of the [easiest ones to fix](http://webaim.org/techniques/forms/).

The Wave Tool helps you spot missing or unassociated form labels quickly. Use the same methods for keyboard testing here and make sure you can reach each form label and button, and activate them.

## Multimedia, Really

No special tools required here either!

Look at your site or application to see if you're using any kind of multimedia (audio or video) content. If you have it, does:

- it have controls that are keyboard accessible?
- it have transcripts or some sort?
- it contain captions?

## Basics, Basics, Basics

This next check gives you a 50,000-foot view of your page or application. Grab one of the [Developer Extensions](http://chrispederick.com/work/web-developer/) and get to destructing.

You'll want to turn off CSS, images and make the page as linear as possible. Look for any missing pieces of the page.

## You Talking to Me

Lastly, I run the page or chunks of the page through a screen reader. I typically use VoiceOver, but other options exist. Using a screen reader is an aquired skill. Be patient. WebAIM has articles on [evaluating web accessibility in many of the major screen readers](http://webaim.org/articles/). Much like the "Structure" check, I look for missing pieces or items that deserve more attention.

### And Onward

Hopefully, this helps you not only see a possible workflow, but a handful of tools to get it accomplished. Now, go make the web more accessible. And remember, ship code that's closer to better than before than absolutely perfect.
