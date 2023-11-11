---
title: Issue No. 300
description: Diving into open source.
date: 2013-11-29T00:07:01+00:00
permalink: /blog/issue-no-300/
tags:
  - Underscores
  - WordPress
  - Work
---

## The Story of my First Open Source Contribution

Konstantin Obenland merged my [first open source code contribution](https://github.com/Automattic/_s/pull/300) a few months ago. And despite some hiccups thanks to an overlooked setting in Github on my part, I got full credit and I'm now on the [contributors list for Underscores](http://underscores.me/#contribute), a popular WordPress starter theme. **Yay**!

{% image "./underscores-pull-request-screenshot.jpg", "", "A screenshot of my first open source code contribution on Github, issue number 300 for the Underscores WordPress theme." %}

I've used WordPress for almost five years, so finally having a chance to write code that helps a WordPress project is exciting. I wanted to share the story of how I went from user to code contributor and what I've learned in the process.

I [started out as just a WordPress user](/blog/dear-wordpress/) so I know the delta between user and code contributor well. But I believe anyone can learn to contribute code and reading stories like [Andrew Nacin's first commit to WordPress](http://nacin.com/2010/11/16/one-year/) or [Aaron Jorbin's contribution](http://aaron.jorb.in/blog/2010/03/commit-the-story-of-writing-a-wordpress-patch/) inspired me to write this.

### Start Somewhere

If you want to contribute code, it's hard to know where to start. Where can you fit in? How do you know what needs to be done? You have to start somewhere. **Find a project you're passionate about and use it**. For me, that meant [Underscores](http://underscores.me/). In my first web development job at [The Arc](http://www.thearc.org), I started building WordPress themes. I began using the [Toolbox theme](http://wordpress.org/themes/toolbox), but it soon evolved into Underscores. I built a few themes with Underscores so I became familiar with its code and its goals. I also used it as a starting point for all my custom themes. I grew to love it for both its strengths and weaknesses. Without some of this knowledge, I couldn't add my own expertise in the form of code.

### Listen and Learn

I started following Underscores on Github, getting a load of email notifications when issues and commits happened. It was overwhelming but also educational. By reading through a number of the Github issues, I learned about how the maintainers of Underscores approached adding new features, fixing bugs and handling pull requests. **When jumping into a new project, you can't contribute without knowing how others have contributed**. This proved most important for Underscores because it doesn't have any official documentation for contributing or a roadmap.

### Find a Focus, be Patient

Once I started to become familiar with all things Underscores, I started to think about how I could contribute code. I'm an accessibility advocate so that made the most sense, but I remember telling [Aaron Jorbin](http://aaron.jorb.in/) at a WordPress DC meetup that I wasn't sure what could be done from an accessibility standpoint. That's made more difficult since Underscores serves the community as a starter theme and lacks a real, polished front end. **Sometimes, finding your focus takes takes time**. However, once I saw [Trac ticket 24766](http://core.trac.wordpress.org/ticket/24766) I thought taking a similar approach in Underscores would be welcome. So I started writing code to remove the title attributes in Underscores.

### Commit

Ripping out all of the title attributes turned out to be a big task. I touched [seven files](https://github.com/Automattic/_s/pull/300/files) in total, and broke the changes down into three commits. However, I planned for it to be only two commits originally. I ran into the dreaded merge conflict after the first round of changes because so much time passed between working on the changes. I persevered though and cleaned things up and committed my code. I had to [wait awhile](https://github.com/Automattic/_s/pull/300#issuecomment-23272821) before finding out whether my change would be accepted. **When I say commit, I'm talking less about committed code, and more about making a plan and carrying it out. Be thoughtful, methodical and patient**.

### Keep Going

Seeing my name on the contributor's list on the [Underscores website](http://underscores.me/) felt like nothing else. As a writer, I published thousands of stories in newspapers and magazines. In doing so, receiving feedback from readers was rare. However, when you're contributing code to an open source project you see feedback on multiple fronts. Project maintainers and fellow developers comment on your code. Sometimes they modify it to make it better. **And as the project progresses, you can see if your code actually does what it was meant to do – add a feature or fix a bug. That's the exciting part! Keep going**.

Since that first commit, I've made [one more](https://github.com/Automattic/_s/commit/3ae7a5e310922c1d563f758c3bf3d6a8af92d5b9) to help with the skip link in Underscores. I'm sure it won't be my last, and I know I'll learn much more along the way.
