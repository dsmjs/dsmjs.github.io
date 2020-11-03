---
title: ES Modules - Things to consider
date: November 10, 2020
speaker: Trevor Richardson
twitter: trevtrich
github: trevtrich
---

I've spent a fair bit of time recently digging into the use of [ES Modules](https://tc39.es/ecma262/#sec-modules) and have come across (and continue to come across) a ton of things to consider; more than most probably care to consider. I plan to go over from a high level how they can be used right now with live examples, then work my way down to some of the finer grained pieces that should be considered when deciding how far to go with them.

A couple examples are:
1. what happens when I try to import common.js modules into es modules in the browser?
1. are they ready for use in production apps?
