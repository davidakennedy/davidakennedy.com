---
title: A Collection of WordPress Theme Review Tips
description: A few tips on reviewing WordPress themes for quality.
date: 2016-02-15T11:00:20+00:00
permalink: /blog/wordpress-theme-review-tips/
tags:
  - WordPress
  - WordPress Theming
---

Seeing a [call for theme review tips on the Make WordPress Themes site](https://make.wordpress.org/themes/2016/02/12/share-your-best-review-tips/) inspired me to share my own workflow. Hopefully, it helps some of you who may want to become theme reviewers or hone your craft.

A team of volunteers checks all the WordPress themes that end up in the [WordPress.org theme directory](https://wordpress.org/themes/). They ensure that the themes meet a set of [standard requirements](https://make.wordpress.org/themes/handbook/review/required/) so people get a consistent experience when using a theme from the directory. You can [become a reviewer too](https://make.wordpress.org/themes/handbook/get-involved/become-a-reviewer/)!

## First, A Quick Peek

Before I even begin reviewing a theme, I like to scan it quickly to get an idea of what it's like, and where I might find issues. This takes about five minutes, and I follow these steps:

  * Look at the file structure: What do you see? Is it a custom theme or child theme? What frameworks or libraries are used? Is the theme set up in a standard way, like a Core theme.
  * Check out the `functions.php` file. Does anything make you pause and wonder why it's done like that?
  * Load the major pages in a browser to see if you notice anything out of the ordinary or broken. Major pages include: home, archive, page and single post. Also, check out the Customizer to see what the options and theme setup might be like.

Doing that gives me a broad overview of the theme, and helps pinpoint any areas I may need to pay extra attention to when reviewing. Next, I can begin my full review.

## Next, A Full Review Workflow

  * Look at the code first, going file by file. I like to start with the `functions.php` file first, since it's the brain of a theme. Then, I'll look at other include files to get a sense of what _should_ happen on the front end. Then I look at the template files to see the HTML. Lastly, I'll check out the JavaScript and CSS files to see how they add to the theme.
  * I like to check for code related issues first, such as function names, escaping and translations, etc. Then I look at details, like documentation, screenshot and the stylesheet header.
  * Lastly, I'll take the theme for a spin, testing the front end and theme options making sure they work properly.

## Finally, A Few Tips and Tricks

I'm always tweaking my review process because I never think it's efficient enough. Here are a few tips and tricks I've used lately:

  * I have [templates for replying to reviews](https://gist.github.com/davidakennedy/fad90f6540348a782415). I've put them on Github in case you want to steal them.
  * I always have the current requirements open in a browser tab to cross reference during the review, just in case something has changed recently
  * I run the [Theme Check plugin](https://wordpress.org/plugins/theme-check/) on a theme before anything else in a full review to get clues where I may need to focus my attention.
  * My standard setup uses [WordPress VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) with all of the theme-related plugins recommended in the [Developer plugin](https://wordpress.org/plugins/developer/).
  * I primarily use Chrome to test themes. I will use just Firefox to test keyboard accessibility because it has no default `:focus` styles, and Safari to test with Voiceover on because the two are well integrated.
  * Spotting possible escaping issues always proves challenging. I like to use [PHP Codesniffer](https://github.com/squizlabs/PHP_CodeSniffer) with the [WordPress sniffs](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) to check for escaping issues. Running this command just executes the escaping "sniff": `phpcs --standard=WordPress-Extra --sniffs=WordPress.XSS.EscapeOutput /path/to/code/` It won't be perfect all the time, but it will save you time.
  * I like to use regular expressions in [Atom](https://atom.io) to search for various things like function names, text domains, and more.

Now, go become a more prolific reviewer, and don't forget to share your own tips!
