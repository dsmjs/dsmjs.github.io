---
title: Introduction to ClojureScript
date: October 8, 2013
tags:
speaker: David W. Body
twitter: david_body
---



ClojureScript compiles [Clojure](http://clojure.org/) to optimized JavaScript. Specifically, the compiler emits JavaScript compatible with the advanced compilation mode of [Google Closure](http://code.google.com/closure/).

We'll start with an introduction to [Clojure](http://clojure.org/), assuming no prior knowledge of the language. Clojure is a dynamic, general purpose programming language (actually a Lisp dialect) that features a rich set of immutable data structures, lazy sequences, first-class functions, macros, and other features.

Then we'll look at ClojureScript, which compiles Clojure code to optimized JavaScript that can be used on a web page or run in another JavaScript environment such as [Node.js](http://nodejs.org/).

We'll cover

* Setting up a simple ClojureScript project
* ClojureScript build process, including compilation modes
* JavaScript Interop

If time permits, we'll look at the new [core.async](https://github.com/clojure/core.async) library that provides a solution to "callback hell."


