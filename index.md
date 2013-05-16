---
layout: default
---

<h2>{{ site.posts.first.date | date: "%B %d %Y" }}</h2>
<div>{{ site.posts.first.time }} @ {{ site.posts.first.location }}</div>

{{ site.posts.first.content }}
