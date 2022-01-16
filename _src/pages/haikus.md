---
title: Haikus
layout: layouts/haikus.njk
eleventyNavigation:
  key: Haikus
  parent: Home
templateClass: archive-template
---

I started writing haikus in 2020 for fun. I like the constraints and compactness of the format.

{% if (collections.haikus.length) > 1  %}

<p>You can read {{ collections.haikus.length }} haikus.</p>
{% else %}
<p>You can read {{ collections.haikus.length }} haiku.</p>
{% endif %}
