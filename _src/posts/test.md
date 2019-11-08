---
title: Test all the things
description: Let's test some HTML.
date: 2019-08-24
tags:
  - test it long
  - Test it too
  - Read this
  - Loooooooong tag
  - New one
  - Test it some more
layout: layouts/post.njk
---

<h2>Long paragraph</h2>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

<h2>Medium paragraph</h2>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

<h2>Short paragraph</h2>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<h2>Definition List</h2>

<dl>
  <dt>Definition list</dt>
  <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.</dd>
  <dt>Lorem ipsum dolor sit amet</dt>
  <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.</dd>
</dl>

<h2>Unordered List: Short Items</h2>

<ul>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
  <li>Aliquam tincidunt mauris eu risus.</li>
  <li>Vestibulum auctor dapibus neque.</li>
</ul>

<h2>Unordered List: Long Items</h2>

<ul>
  <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
  <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
  <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
  <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
</ul>

<h2>Ordered List: Short Items</h2>

<ol>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
  <li>Aliquam tincidunt mauris eu risus.</li>
  <li>Vestibulum auctor dapibus neque.</li>
</ol>

<h1>Random Stuff</h1>

<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

<h2>Header Level 2</h2>

<ol>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
  <li>Aliquam tincidunt mauris eu risus.</li>
</ol>

<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

<h3>Header Level 3</h3>

<ul>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
  <li>Aliquam tincidunt mauris eu risus.</li>
</ul>

<h4>Header Level 4</h4>

<pre><code>
#header h1 a {
display: block;
width: 300px;
height: 80px;
}
</code></pre>

```js
function myFunction() {
  return true;
}
```

<h5>Form, and Header Level 5</h5>

<form action="#" method="post">
  <div>
    <label for="name">Text Input:</label>
    <input type="text" name="name" id="name" value="" />
  </div>

  <div>
    <p>Radio Button Choice</p>
    <label for="radio-choice-1">Choice 1</label>
    <input type="radio" name="radio-choice-1" id="radio-choice-1" value="choice-1" />
    <label for="radio-choice-2">Choice 2</label>
    <input type="radio" name="radio-choice-2" id="radio-choice-2" value="choice-2" />
  </div>

  <div>
    <label for="select-choice">Select Dropdown Choice:</label>
    <select name="select-choice" id="select-choice">
      <option value="Choice 1">Choice 1</option>
      <option value="Choice 2">Choice 2</option>
      <option value="Choice 3">Choice 3</option>
    </select>
  </div>

  <div>
    <label for="textarea">Textarea:</label>
    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
  </div>

  <div>
    <label for="checkbox">Checkbox:</label>
    <input type="checkbox" name="checkbox" id="checkbox" />
  </div>

  <div>
    <input type="submit" value="Submit" />
  </div>
</form>

<h6>Table, and Header Level 6</h6>

<table>
  <caption>Concerts</caption>
  <tr>
    <th>Date</th>
    <th>Event</th>
    <th>Venue</th>
  </tr>
  <tr>
    <td>12 Feb</td>
    <td>Waltz with Strauss</td>
    <td>Main Hall</td>
  </tr>
</table>

<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>

<a href="#"><h2>Header 2 with link</h2></a>

<p class="callout">Please pay attention.</p>

<hr>

<p class="intro">This is serious.</p>
