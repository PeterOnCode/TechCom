---
title: Nuxt.js Documentation
lang: en-US
meta:
  - name: description
    content: nest, javascript
  - name: keywords
    content: Javascript, nest
---

`<techcom-breadcrumbs page=$page>`

# {{ $page.title }}

[[toc]]
`<techcom-toc page='$page'>`

## Resources

- [Guide](/documentation/programming/javascript/vuejs/guide.md)
- [Nuxt.js Guide] - https://nuxtjs.org/guide

## Introduction

### What is Nuxt.js?

<https://nuxtjs.org/guide#what-is-nuxt-js->

### How it Works

Nuxt.js includes the following to create a rich web application development:

- [Vue 2](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/en/)
- [Vuex](https://vuex.vuejs.org/en/) (included only when using the [store option](https://nuxtjs.org/guide/vuex-store))
- [Vue Server Renderer](https://ssr.vuejs.org/en/) (excluded when using `mode: 'spa'`)
- [vue-meta](https://github.com/declandewet/vue-meta)

A total of only 57kB min+gzip (60kB with Vuex).

Under the hood we use [webpack](https://github.com/webpack/webpack) with [vue-loader](https://github.com/vuejs/vue-loader) and [babel-loader](https://github.com/babel/babel-loader) to bundle, code-split and minify your code.

### Schema

This schema shows what is called by Nuxt.js when the server is called or when the user navigates through the app via `<nuxt-link>`:


![Nuxt Schema](/img/documentation-nuxtjs/nuxt-schema.svg)






[&#8592; Menu](/menu/)
