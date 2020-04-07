---
title: Combat Image Attachment Spam in WordPress
description: A hopefully handy tip for imge-heavy sites.
date: 2013-07-06T17:01:25+00:00
permalink: /blog/combat-image-attachment-spam-in-wordpress/
tags:
  - Web Development
  - WordPress
---

Spam comments got you down?

Hey, don't worry – it happens to every blogger. The [Akismet service](http://akismet.com/) does wonders, helping combat comment spam in a big way, but there's one specific use case where I've noticed it's struggled lately: spam on WordPress image attachments.

## The Problem

By that, I mean the comments specifically on image posts in WordPress.

WordPress gives you the option to set comments open or closed on image attachments, and it [doesn't look like that will change](http://core.trac.wordpress.org/ticket/8177). That's awesome, especially if you have a gallery and want to have users be able to comment on individual images. But you may not care about that, and rather have users comment on the post itself. I wanted to just have all comments and pings closed on all image attachments.

## A Solution

[John P. Bloch](http://code.johnpbloch.com/) posted an excellent solution over on [WordPress Answers](http://wordpress.stackexchange.com/questions/15750/whats-the-easiest-way-to-close-comments-on-media-attachments). That worked great for me. I dropped the code into my site's functionality plugin, (it will also work in your `functions.php` file) and bam – comment spam reduced.

But the last part of the code wasn't updating the database values. See it here:


```php
global $wpdb;
$wpdb->update( $wpdb-&gt;posts, array( 'comment_status' => 'closed' ), array( 'post_type' =>; 'attachments', 'comment_status' => 'open' ) );
```

So instead, I ran two simple SQL queries to close comments and pings on image attachments.

They are:

```php
UPDATE wp_posts SET ping_status = replace(ping_status, 'open', 'closed') WHERE post_type = 'attachment';

UPDATE wp_posts SET comment_status = replace(comment_status, 'open', 'closed') WHERE post_type = 'attachment';
```

That's worked for me so far. I wanted to share just in case it helps you solve a similar problem, and reduce your comment spam!
