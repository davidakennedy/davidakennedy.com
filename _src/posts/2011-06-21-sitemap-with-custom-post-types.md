---
title: WordPress Sitemap with Custom Post Types
description: Let's make a sitemap with a bit of PHP.
date: 2011-06-21T20:35:30+00:00
permalink: /blog/sitemap-with-custom-post-types/
tags:
  - Web Development
  - WordPress
  - Work
---
Sitemaps offer visitors a great overview of a site's content, and WordPress allows you to create them with ease. [Joost de Vaulk](http://yoast.com/) shows you how to make [one version of a sitemap](http://yoast.com/html-sitemap-wordpress/). However, it doesn't include an option for custom post types, which have become more popular since WordPress 3.0 came out. Here's how to make that happen, building on Joost's example.

## The Code

You'll want to start out with Joost's code because it works perfectly, and will give you just what you need for your posts and pages. Use this code for for your custom post type:

You'll see a few things happening here:

```php
<h2 id="my-post-type">My Post Type</h2>
<ul>
<?php
$terms = get_terms('my_taxonomy', 'orderby=name');
foreach ($terms as $term) {
    echo '<li><h3>' . $term->name . '</h3>';
    echo '<ul>';
    $args = array(
        'post_type' => 'my_post_type',
        'posts_per_page' => -1,
        'tax_query' => array(
            array(
                'taxonomy' => 'my_taxonomy',
                'field' => 'slug',
                'terms' => $term->slug
            )
        )
    );
    $new  = new WP_Query($args);
    while ($new->have_posts()) {
        $new->the_post();
        echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
    }
    echo '</ul>';
    echo '</li>';
}
?>
```

* We're setting up a basic unordered list, based on our custom [taxonomy](http://codex.wordpress.org/Taxonomies) and listing posts in our custom [post type](http://codex.wordpress.org/Post_Types) by title.
* In the second chunk of code, we're using a new [WP Query](http://codex.wordpress.org/Class_Reference/WP_Query) to query the posts for our custom post type and custom taxonomy.

You'll need to change the code in a few key places.

```php
$terms = get_terms( 'my_taxonomy', 'orderby=name' );
```

Change the above code the your custom taxonomy name.

```php
'post_type' => 'my_post_type',
```

Change the above code the your custom post type name.

```php
'taxonomy' => 'my_taxonomy',
```

Change the above code the your custom taxonomy name.

## Wrapping It Up

That does it. Now, whenever you add posts to your post type and taxonomy, it gets automatically added to the sitemap. Nice! [Follow the project on GitHub](https://gist.github.com/davidakennedy/5992741) or [download the files from GitHub](https://gist.github.com/davidakennedy/5992741/download). Huge thanks to Joost for a great code snippet! And thanks to [Joeleen Kennedy](http://joeleen.net/) for helping me figure this one out.