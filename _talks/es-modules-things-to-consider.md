---
title: ES Modules - Things to consider
date: November 10, 2020
speaker: Trevor Richardson
twitter: trevtrich
github: trevtrich
---

I've spent a fair bit of time recently digging into the use of [ES Modules](https://tc39.es/ecma262/#sec-modules) and have come across (and continue to come across) a ton of things to consider; more than most probably care to consider. I plan to go over from a high level how they can be used right now with live examples in both Node.js & the browser, then work my way down to some of the finer grained pieces that should be considered when deciding how far to go with them.

A few examples are:
1. can common.js modules be imported from es modules? how about in the browser vs. in Node?
1. recommendations for building a shared library that might be consumed in either common.js or as an es module.