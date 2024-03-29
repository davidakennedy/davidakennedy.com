---
title: Gulp JS File for WordPress Themes
description: Make the robots do it.
date: 2015-03-19T21:58:12+00:00
permalink: /blog/gulp-js-file-for-wordpress-themes/
tags:
  - JavaScript
  - WordPress Theming
  - Work
---

Fellow Theme Wrangler [Dan Robert](http://danielwrobert.com) introduced me to Gulp recently and I've run with it, using it on my latest WordPress theme projects. Dan got me going with most of the [code for my gulpfile.js](https://gist.github.com/davidakennedy/2f0989e896fce3a41951), but I've added a few other plugins. I love the automated linting the most. Gulp, for the win.

```js
// Include Gulp
var gulp = require("gulp");

// Include Plugins
var sass = require("gulp-ruby-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  csslint = require("gulp-csslint"),
  cssbeautify = require("gulp-cssbeautify"),
  imagemin = require("gulp-imagemin"),
  jshint = require("gulp-jshint"),
  notify = require("gulp-notify"),
  cache = require("gulp-cache");

// Tasks
// Styles
gulp.task("styles", function () {
  return sass("sass/style.scss", { style: "expanded" })
    .pipe(autoprefixer({ browsers: "last 2 versions", cascade: false }))
    .on("error", function (err) {
      console.error("Error!", err.message);
    })
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(
      cssbeautify({
        indent: "	",
        autosemicolon: true,
      })
    )
    .pipe(gulp.dest("./"))
    .pipe(notify({ message: "Styles task complete" }));
});

// Scripts
gulp.task("scripts", function () {
  return gulp
    .src("js/dev/**/*.js")
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("default"))
    .pipe(gulp.dest("js"))
    .pipe(notify({ message: "Scripts task complete" }));
});

// Images
gulp.task("images", function () {
  return gulp
    .src("img/dev/**/*")
    .pipe(
      cache(
        imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
      )
    )
    .pipe(gulp.dest("img"))
    .pipe(notify({ message: "Images task complete" }));
});

// Watch files for changes
gulp.task("watch", function () {
  // Watch .scss files
  gulp.watch("sass/style.scss", ["styles"]);

  // Watch .js files
  gulp.watch("js/dev/**/*.js", ["scripts"]);

  // Watch image files
  gulp.watch("img/dev/**/*", ["images"]);
});

// Default Task
gulp.task("default", ["styles", "scripts", "images", "watch"]);
```
