---
title: Redux - A Case Study in Performance Tuning
date: August 15, 2017
tags: Redux
speaker: Toran Billups
twitter: toranb
---

I've been using redux with relational data and just assumed that updating a leaf node wouldn't require a full re-render of any parent component(s). As it turns out, unless you explicitly preserve the reference to a given data structure any connected component subscribed to that slice of state in the reducer will be notified to re-render. Join me for a very enlightening discussion on component state organization and the performance implications I faced trying to debunk one of the common criticisms of redux.
