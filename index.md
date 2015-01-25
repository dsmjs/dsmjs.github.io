---
layout: default
---

<h2 itemprop="startDate" content="{{ site.posts.first.date | date: "%Y-%m-%d" }}">{{ site.posts.first.date | date: "%B %d %Y" }}</h2>
<p>{{ site.posts.first.time }} @ {{ site.posts.first.location }}</p>

{{ site.posts.first.content }}
