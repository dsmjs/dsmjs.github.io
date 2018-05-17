# Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Add your talk

* Create a new file under `_talks/` with a name that describes your topic
* Define the details about your talk
  * Available [front-matter](https://jekyllrb.com/docs/frontmatter/) properties
    are as follows:
    * `title`: title of the talk
    * `date`: meeting date. ensure this date matches the date of the
      [meeting](#add-the-meeting) for the night
    * `tags`: a list of tags that describe the content of the talk
    * `speaker`: your name
    * `twitter`: your twitter account (without the `@`)
    * `slides`: link to a web hosted version of the slides for the talk. up to
      you whether you include this before the talk to give a preview or allow
      attendees to follow along, or wait until after the talk.
    * `code`: link to code examples from the talk. up to you whether you include
      this before the talk to give a preview or allow attendees to follow along,
      or wait until after the talk.
      attendees to follow along, or wait until after the talk.
    * `video`: link to a recording of the talk. up to you whether you include
      a previous version before the talk to give a preview to potential
      attendees, or wait until after the talk.
  * Add your talk description as [markdown](https://daringfireball.net/projects/markdown/)
    below the front-matter

## Add the meeting

If you are coordinating hosting and/or sponsorship, feel free to also add the
meeting.

* Create a new file under `_posts/` with the format `YYYY-MM-DD-DESCRIPTION.md`
* Define the details you have available about the meeting. Available properties
  are:
  * `layout`: this should always be defined as `post`
  * `date`: meeting date. ensure this date matches the date of the
    [talk(s)](#add-your-talk) for the night. if multiple talks are added for the
    same date, they will all be listed under the meeting.
  * `time`: meetings are normally scheduled `6:00pm - 7:00pm`
  * `location`: name and address of hosting location
  * `city`: host city
  * `state`: `IA`
  * `zip`: host zip code
  * `pizzaSponsorName`: sponsor name
  * `pizzaSponsorSite`: sponsor website
  * `tiklyWidgetID`: Please _do not_ define this property. It will be added by a
    dsmJS lead
  * `tiklyWidgetURL`: Please _do not_ define this property. It will be added by
    a dsmJS lead
