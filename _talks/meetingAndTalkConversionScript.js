const frontMatter = require('front-matter');
const fs = require('fs')
const moment = require('moment')
import { parse } from 'date-fns'

const meeting20130514 = fs.readFileSync('./_posts/2013-05-14-meeting.md', 'utf-8')
const meeting20130613 = fs.readFileSync('./_posts/2013-06-13-meeting.md', 'utf-8')
const meeting20130711 = fs.readFileSync('./_posts/2013-07-11-meeting.md', 'utf-8')
const meeting20130820 = fs.readFileSync('./_posts/2013-08-20-meeting.md', 'utf-8')
const meeting20130910 = fs.readFileSync('./_posts/2013-09-10-meeting.md', 'utf-8')
const meeting20131008 = fs.readFileSync('./_posts/2013-10-08-meeting.md', 'utf-8')
const meeting20131112 = fs.readFileSync('./_posts/2013-11-12-meeting.md', 'utf-8')
const meeting20140116 = fs.readFileSync('./_posts/2014-01-16-meeting.md', 'utf-8')
const meeting20140211 = fs.readFileSync('./_posts/2014-02-11-meeting.md', 'utf-8')
const meeting20140311 = fs.readFileSync('./_posts/2014-03-11-meeting.md', 'utf-8')
const meeting20140408 = fs.readFileSync('./_posts/2014-04-08-meeting.md', 'utf-8')
const meeting20140513 = fs.readFileSync('./_posts/2014-05-13-meeting.md', 'utf-8')
const meeting20140610 = fs.readFileSync('./_posts/2014-06-10-meeting.md', 'utf-8')
const meeting20140708 = fs.readFileSync('./_posts/2014-07-08-meeting.md', 'utf-8')
const meeting20140812 = fs.readFileSync('./_posts/2014-08-12-meeting.md', 'utf-8')
const meeting20140909 = fs.readFileSync('./_posts/2014-09-09-meeting.md', 'utf-8')
const meeting20141112 = fs.readFileSync('./_posts/2014-11-12-meeting.md', 'utf-8')
const meeting20150107 = fs.readFileSync('./_posts/2015-01-07-meeting.md', 'utf-8')
const meeting20150203 = fs.readFileSync('./_posts/2015-02-03-meeting.md', 'utf-8')
const meeting20150309 = fs.readFileSync('./_posts/2015-03-09-meeting.md', 'utf-8')
const meeting20150414 = fs.readFileSync('./_posts/2015-04-14-meeting.md', 'utf-8')
const meeting20150512 = fs.readFileSync('./_posts/2015-05-12-meeting.md', 'utf-8')
const meeting20150609 = fs.readFileSync('./_posts/2015-06-09-meeting.md', 'utf-8')
const meeting20150810 = fs.readFileSync('./_posts/2015-08-10-meeting.md', 'utf-8')
const meeting20150908 = fs.readFileSync('./_posts/2015-09-08-meeting.md', 'utf-8')
const meeting20151013 = fs.readFileSync('./_posts/2015-10-13-meeting.md', 'utf-8')
const meeting20151110 = fs.readFileSync('./_posts/2015-11-10-meeting.md', 'utf-8')
const meeting20160112 = fs.readFileSync('./_posts/2016-01-12-meeting.md', 'utf-8')
const meeting20160209 = fs.readFileSync('./_posts/2016-02-09-meeting.md', 'utf-8')
const meeting20160308 = fs.readFileSync('./_posts/2016-03-08-meeting.md', 'utf-8')
const meeting20160412 = fs.readFileSync('./_posts/2016-04-12-meeting.md', 'utf-8')
const meeting20160511 = fs.readFileSync('./_posts/2016-05-11-meeting.md', 'utf-8')
const meeting20160614 = fs.readFileSync('./_posts/2016-06-14-meeting.md', 'utf-8')
const meeting20160712 = fs.readFileSync('./_posts/2016-07-12-meeting.md', 'utf-8')
const meeting20160809 = fs.readFileSync('./_posts/2016-08-09-meeting.md', 'utf-8')
const meeting20160913 = fs.readFileSync('./_posts/2016-09-13-meeting.md', 'utf-8')
const meeting20161011 = fs.readFileSync('./_posts/2016-10-11-meeting.md', 'utf-8')
const meeting20161115 = fs.readFileSync('./_posts/2016-11-15-meeting.md', 'utf-8')
const meeting20170110 = fs.readFileSync('./_posts/2017-01-10-meeting.md', 'utf-8')
const meeting20170215 = fs.readFileSync('./_posts/2017-02-15-meeting.md', 'utf-8')
const meeting20170314 = fs.readFileSync('./_posts/2017-03-14-meeting.md', 'utf-8')
const meeting20170411 = fs.readFileSync('./_posts/2017-04-11-meeting.md', 'utf-8')
const meeting20170509 = fs.readFileSync('./_posts/2017-05-09-meeting.md', 'utf-8')
const meeting20170613 = fs.readFileSync('./_posts/2017-06-13-meeting.md', 'utf-8')
const meeting20170718 = fs.readFileSync('./_posts/2017-07-18-meeting.md', 'utf-8')
const meeting20170815 = fs.readFileSync('./_posts/2017-08-15-meeting.md', 'utf-8')
const meeting20170912 = fs.readFileSync('./_posts/2017-09-12-meeting.md', 'utf-8')
const meeting20171010 = fs.readFileSync('./_posts/2017-10-10-meeting.md', 'utf-8')
const meeting20171114 = fs.readFileSync('./_posts/2017-11-14-meeting.md', 'utf-8')
const meeting2017121M = fs.readFileSync('./_posts/2017-12-1-meeting.md', 'utf-8')
const meeting20180109 = fs.readFileSync('./_posts/2018-01-09-meeting.md', 'utf-8')
const meeting20180213 = fs.readFileSync('./_posts/2018-02-13-meeting.md', 'utf-8')
const meeting20180313 = fs.readFileSync('./_posts/2018-03-13-meeting.md', 'utf-8')
const meeting20180410 = fs.readFileSync('./_posts/2018-04-10-meeting.md', 'utf-8')
const meeting20180508 = fs.readFileSync('./_posts/2018-05-08-meeting.md', 'utf-8')
const meeting20180619 = fs.readFileSync('./_posts/2018-06-19-meeting.md', 'utf-8')
const meeting20180710 = fs.readFileSync('./_posts/2018-07-10-meeting.md', 'utf-8')
const meeting20180814 = fs.readFileSync('./_posts/2018-08-14-meeting.md', 'utf-8')
const meeting20180911 = fs.readFileSync('./_posts/2018-09-11-meeting.md', 'utf-8')
const meeting20181009 = fs.readFileSync('./_posts/2018-10-09-meeting.md', 'utf-8')
const meeting20181113 = fs.readFileSync('./_posts/2018-11-13-meeting.md', 'utf-8')
const meeting20181211 = fs.readFileSync('./_posts/2018-12-11-meeting.md', 'utf-8')
const meeting20190108 = fs.readFileSync('./_posts/2019-01-08-meeting.md', 'utf-8')
const meeting20190312 = fs.readFileSync('./_posts/2019-03-12-meeting.md', 'utf-8')
const meeting20190409 = fs.readFileSync('./_posts/2019-04-09-meeting.md', 'utf-8')
const meeting20190514 = fs.readFileSync('./_posts/2019-05-14-meeting.md', 'utf-8')

const talks = [
  frontMatter(fs.readFileSync('./_talks/_april_no_meeting.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/_december_2018_no_meeting.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/_december_no_meeting.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/a-gentle-introduction-to-emberjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/an-interactive-demo-with-nodejs-and-aws-lambda.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/an-introduction-to-transducers.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/angular-2---first-look.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/angularfire.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/async-await.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/aurelia-rediscover-you-choice.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/avoiding-the-monorepo.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/browserify-basics.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/building-a-web-app-in-js-without-client-side-js.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/building-static-sites-with-jekyll.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/building-your-own-command-line-interface-with-node-and-npm.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/building-your-web-apps-with-gulp.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/chrome-app-and-extension-crash-course.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/chrome-dev-tools-tips-and-tricks.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/codeReview_etc.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/collaborating-through-a--shared--component-library.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/continuous-deployment-of-npm-packages.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/creating-a-realtime-auction.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/demystifying-the-ember-object-model.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/dos-and-donts-of-high-performance-javascript---how-webfilings-new-open-source-project-improves-the-mobile-experience.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/elm.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/exploring-evolutionary-computing.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/facebook_instant_game_hacking.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/firebase.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/from-angular-1-to-angular-2.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/from-rx-to-redux-and-back.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/functional-programming-in-ember-the-emberredux-origin-story.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/functional-reactive-programming-in-javascript-with-rxjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/future-proof-your-javascript-with-babel-.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/gatsby-static-site-generation-with-react.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/github-and-the-open-source-ecosphere.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/going-async-with-promises-and-generators.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/handlebarsjs--minimal-templating-on-steroids.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/indexeddb-fundamentals.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/installing-and-setting-up-nodejs-and-npm---a-beginner-friendly-guide.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intermediate-debugging.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intro-to-absurdjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intro-to-angularjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intro-to-elm-programming-language.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intro-to-es6.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intro-to-grunt---stop-doing-things-manually.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intro-to-gulp.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/intro-to-web-components.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/introduction-to-clojurescript.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/is-your-grunt-file-maintainable.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/it-hurtsso-good---.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/javascript-cryptography.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/javascript-game-development-.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/javascript-prototypes.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/knockoutjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/lego_boost.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/lets-talk-about-real-time-web-applications.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/make-money-freelancing.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/marble-tests-with-rxjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/outsidein-test-driven-development.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/over-mocking-under-delivering.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/phaserjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/react--routing--lazy-loading-and-es6.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/react-in-isolation.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/react-render-server-or-client.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/react-why-did-you-render.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/redux---the-beginner-friendly-introduction.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/redux-and-typescript-better-together.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/redux-journey-from-mvp-to-production.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/redux-perf-case-study.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/refactor-like-a-scientist.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/responsible-responsive-web-design.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/responsive-tables-with-tablesaw.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/rest-to-graphql.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/robotics-with-javascript.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/serverless-webhooks.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/serverless.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/testing-async-node-functions-with-mocha-and-jasmine-20.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/the-future-a-story-about-the-vnext-developer-toolchain.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/this-is-how-i-code.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/umm-i-created-a-presentation-with-sailjs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/unit-and-integration-testing---better-together.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/unit-testing-methodsmodules-in-isolation-with-qunit.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/universal-javascript-rendering-react-on-ther-server-and-client.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/using-backbone-to-visualize-music.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/using-es6-modules-today.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/vagrant.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/vuejs.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/what-is-this.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/why-single-page-apps-anyway.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/working-with-files-in-the-browser.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/writing-javascript-like-a-grownup.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/writing-my-first-nontrivial-single-page-app.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/writing-tests-for-javascript-with-qunitsinon-and-karma.md', 'utf-8')),
  frontMatter(fs.readFileSync('./_talks/writing-your-first-react-component.md', 'utf-8')),
].map(x=>x.attributes)

const allMeetings = [
  frontMatter(meeting20130514),
  frontMatter(meeting20130613),
  frontMatter(meeting20130711),
  frontMatter(meeting20130820),
  frontMatter(meeting20130910),
  frontMatter(meeting20131008),
  frontMatter(meeting20131112),
  frontMatter(meeting20140116),
  frontMatter(meeting20140211),
  frontMatter(meeting20140311),
  frontMatter(meeting20140408),
  frontMatter(meeting20140513),
  frontMatter(meeting20140610),
  frontMatter(meeting20140708),
  frontMatter(meeting20140812),
  frontMatter(meeting20140909),
  frontMatter(meeting20141112),
  frontMatter(meeting20150107),
  frontMatter(meeting20150203),
  frontMatter(meeting20150309),
  frontMatter(meeting20150414),
  frontMatter(meeting20150512),
  frontMatter(meeting20150609),
  frontMatter(meeting20150810),
  frontMatter(meeting20150908),
  frontMatter(meeting20151013),
  frontMatter(meeting20151110),
  frontMatter(meeting20160112),
  frontMatter(meeting20160209),
  frontMatter(meeting20160308),
  frontMatter(meeting20160412),
  frontMatter(meeting20160511),
  frontMatter(meeting20160614),
  frontMatter(meeting20160712),
  frontMatter(meeting20160809),
  frontMatter(meeting20160913),
  frontMatter(meeting20161011),
  frontMatter(meeting20161115),
  frontMatter(meeting20170110),
  frontMatter(meeting20170215),
  frontMatter(meeting20170314),
  frontMatter(meeting20170411),
  frontMatter(meeting20170509),
  frontMatter(meeting20170613),
  frontMatter(meeting20170718),
  frontMatter(meeting20170815),
  frontMatter(meeting20170912),
  frontMatter(meeting20171010),
  frontMatter(meeting20171114),
  frontMatter(meeting2017121M),
  frontMatter(meeting20180109),
  frontMatter(meeting20180213),
  frontMatter(meeting20180313),
  frontMatter(meeting20180410),
  frontMatter(meeting20180508),
  frontMatter(meeting20180619),
  frontMatter(meeting20180710),
  frontMatter(meeting20180814),
  frontMatter(meeting20180911),
  frontMatter(meeting20181009),
  frontMatter(meeting20181113),
  frontMatter(meeting20181211),
  frontMatter(meeting20190108),
  frontMatter(meeting20190312),
  frontMatter(meeting20190409),
  frontMatter(meeting20190514),
]

const fileNames = [
'2013-05-14',
'2013-06-13',
'2013-07-11',
'2013-08-20',
'2013-09-10',
'2013-10-08',
'2013-11-12',
'2014-01-16',
'2014-02-11',
'2014-03-11',
'2014-04-08',
'2014-05-13',
'2014-06-10',
'2014-07-08',
'2014-08-12',
'2014-09-09',
'2014-11-12',
'2015-01-07',
'2015-02-03',
'2015-03-09',
'2015-04-14',
'2015-05-12',
'2015-06-09',
'2015-08-10',
'2015-09-08',
'2015-10-13',
'2015-11-10',
'2016-01-12',
'2016-02-09',
'2016-03-08',
'2016-04-12',
'2016-05-11',
'2016-06-14',
'2016-07-12',
'2016-08-09',
'2016-09-13',
'2016-10-11',
'2016-11-15',
'2017-01-10',
'2017-02-15',
'2017-03-14',
'2017-04-11',
'2017-05-09',
'2017-06-13',
'2017-07-18',
'2017-08-15',
'2017-09-12',
'2017-10-10',
'2017-11-14',
'2017-12-1',
'2018-01-09',
'2018-02-13',
'2018-03-13',
'2018-04-10',
'2018-05-08',
'2018-06-19',
'2018-07-10',
'2018-08-14',
'2018-09-11',
'2018-10-09',
'2018-11-13',
'2018-12-11',
'2019-01-08',
'2019-03-12',
'2019-04-09',
'2019-05-14',
] 


export const unique = arr =>
  arr.reduce((a, c) => (a.includes(c) ? [...a] : [...a, c]), [])


  
//   ---
// date: 2018-03-13
// time:
//   start: 6:00pm
//   end: 7:00pm
// host: Gravitate
//pizzaSponsorName ->  sponsor: Robert Half
//match->talk.title  talk: An Introduction to Transducers
// ---
const findMatchingTalk = date => talks.filter(talk=>talk.date === date) 

  const newMeetingFormat = unique(allMeetings.map((x,idx)=>({
    filename: fileNames[idx],
    layout: x.attributes.layout, 
    _date: x.attributes.date,
    date: parse(x.attributes.date), 
    time: x.attributes.time, 
    location: x.attributes.location, 
    city:x.attributes.city,
    state:x.attributes.state,
    zip:x.attributes.zip,
    pizzaSponsorName:x.attributes.pizzaSponsorName,
    pizzaSponsorSite:x.attributes.pizzaSponsorSite,
    talks: findMatchingTalk(x.attributes.date).map(x=>x.title),
  })))



//TODO: map over and parse out broken dates when they don't work.


// console.log(allMeetings)
console.log(newMeetingFormat)
// console.log(talks)
// console.log(allMeetings)

// console.log(talks)

