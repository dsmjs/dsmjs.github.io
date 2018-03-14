---
title: An Introduction to Transducers
date: March 13, 2018
tags: Functional Programming
speaker: Eric Ponto
twitter: ericponto
slides: http://slides.ericponto.com/dsmjs-intro-to-transducers/
---

"Transducer" sounds like just another jargony functional programming term and, yeah, it kind of is...

Consider this example (a classic intro to FP in JS example):

```
[1, 2, 3, 4, 5]
  .map(x => x * x)
  .filter(x => x % 2)
```

Performance-minded people might point out that we are looping through the array 2 times. And while that isn't going to cause any problems with an array of this size and with these simple operations, it can become an issue when the scale is different.

Here's where transducers come in. (More FP jargon coming...) Transducers let us compose our transformation functions (the map and filter) into a single reducer, which we can use to perform the same functionality on the array, but we'll only loop over it 1 time.

This talk will go over the basics of map, filter, reduce and function composition. Then build up gradually to transducers.
