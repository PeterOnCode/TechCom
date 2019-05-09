---
layout: post
title: VueJs Development Guide
published: false
tags: [vue, javascript]
categories: [milk, pumpkin pie, eggs, juice]
category: Javascript
---

# {{ $page.title }}

<div>
  <span v-for="tag in $page.frontmatter.tags">#{{tag}} </span>
</div>

[[toc]]

<https://www.monterail.com/vuejs-development-guide>

- [Why we use Vuejs](https://www.monterail.com/blog/why-we-use-vuejs)

## [What Makes Vue.js Unique?](https://www.monterail.com/vuejs-development-guide#what-makes-vue-js-unique)

Viable alternative to AngularJS and React.

> Vue is flexible, easy to learn, and powerful. Its ecosystem is still growing and it already has everything you need to build all kinds of applications (yes, mobile apps, too).

What are Vue’s main selling points that make developers and business owners select it as their technology of choice? What is so unique about it?

### :tada: Community-driven

- The core team currently has **twenty-two members** to take care of the ecosystem growth.
- Its very beginning, **164 people** from all over the world have contributed to the Vue.js repository.

[Patreon sponsors](https://www.patreon.com/evanyou)

[OpenCollective](https://opencollective.com/vuejs)

### :tada: Progressive

Vue is designed from the ground up to be incrementally adoptable.

It means that Vue.js is a framework that you can **progressively opt-in to**. Regardless of whether you _scale your app up or down_, it will work just as well for you and will stay _flexible_ in terms of tooling configuration, number of features, and team collaboration. For example, when a site’s complexity scales up, libraries like [Vuex](https://vuex.vuejs.org) and [Vue-router](https://router.vuejs.org) can be adopted incrementally.

### :tada: Easy to integrate

Ease of integration is the key advantage of Vue according to the survey results published in State of Vue.js

### :tada: Smooth learning curve

Know JavaScript reasonably well, you can get productive in a matter of hours in a mid-sized project.

### :tada: Time-efficient coding

It allows you to use less code to achieve the same results, and that means less time spent on development and better cost efficiency.

### :tada: Flexible

_"Vue is much less opinionated than Angular, offering official support for a variety of build systems, with no restrictions on how you structure your application. Many developers enjoy this freedom, while some prefer having only one Right Way to build any application."_

### :tada: Has top-notch documentation

<https://twitter.com/chrisvfritz>

## The Evolution of Vue.js

The first Vue commit is dated back to **June 27, 2013**.

- [vue-router](https://router.vuejs.org) (August 18th, 2015),
- [vuex]((https://vuex.vuejs.org)) (November 28th, 2015) and
- [vue-cli](https://cli.vuejs.org) (December 27th, 2015).

These libraries marked the transformation of Vue from a View-layer library into what we today call the __Progressive Framework__.

The template syntax followed a style similar to AngularJS and a component-based architecture introduced by React, thus creating a smooth bridge between the two mindsets.

> Vue is somehow a golden mean that got the best parts of AngularJS and React, with a constant emphasis on developer experience and approachability.

In __April 2016__, we’ve seen the release of the much-anticipated version 2.0—a complete rewrite of the framework which introduced several new concepts like the _Virtual DOM_, as well as and _Server-Side Rendering_ capabilities.

### The Community

- [The Vue Newsletter](https://www.getrevue.co/profile/vuenewsletter)
- [Vue Forum](https://forum.vuejs.org/)
- [Discord Channel](https://discordapp.com/invite/HBherRA)
- [Vue.js Core Team Members](https://vuejs.org/v2/guide/team.html)

### The Ecosystem

Several official libraries, such as:
- [vue-router](https://router.vuejs.org/),
- [vuex](https://vuex.vuejs.org/) (state management),
- [vue-rx](https://github.com/vuejs/vue-rx), and
- [vuex-observable](https://github.com/vuejs/vuex-observable) (for RxJS),

as well as tools like:
- [vue-cli](https://cli.vuejs.org/guide/),
- [vue-server-renderer](https://vuejs.org/v2/guide/ssr.html),
- [vue-loader](https://vue-loader.vuejs.org/),
- [vetur](https://github.com/vuejs/vetur), and
- [vue-migration-helper](https://github.com/vuejs/vue-migration-helper).

---

Community projects:

- [A curated list of awesome things related to Vue.js](https://github.com/vuejs/awesome-vue)
- [A list of recommended libraries](https://curated.vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/)
- [Quasar Framework](https://quasar-framework.org/)
- [Element-UI](http://element.eleme.io/#/en-US)
- [Vuetify](https://vuetifyjs.com/en/)
- [OnsenUI](https://onsen.io/vue/)
- [NativeScript](https://www.nativescript.org/blog/a-new-vue-for-nativescript)

---

### The Backing

The project doesn’t have to follow the needs of a particular company and can instead focus on what the community needs.

- ease of use
- smooth integration
- top-notch documentation
- overall scalability.

---

### The Growth

-  [The State of Vue.js report](https://www.monterail.com/state-of-vuejs-report)

Vue.js is pretty easy to start with, even for a really complex applications. Its simplicity and architectural elegance, elaborate on how easy it is to integrate Vue, but also compare its lightness and performance to other popular frameworks, claiming Vue is the unquestionable winner here. All in all, Vue.js is described as a beginner-friendly framework by more than half of the respondents.


---

[<- Post](/post/)
