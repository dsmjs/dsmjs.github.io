---
title: Rendering React on the Edge with Flareact and Cloudflare Workers
date: January 11, 2021
speaker: Josh Larson
twitter: jplhomer
github: jplhomer
---

When building a JAMStack site, you're often confronted with a decision to either render a dynamic site on the client through traditional AJAX requests — or to render a dynamic site statically on the server. Each choice comes with a tradeoff: fresh content vs better performance.

Popular solutions like Next.js exist to solve this problem with incremental static regeneration, but Next.js isn't quite supported on a platform like Cloudflare Workers. Josh Larson built Flareact to solve this problem. In his talk, he'll walk us through the process of building Flareact and why you might consider using Cloudflare Workers to host your next app.
