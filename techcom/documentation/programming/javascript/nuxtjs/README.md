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

## Installation

> <https://vueschool.io/courses/nuxtjs-fundamentals>

### Introduction to Nuxt.js
#### [What is Nuxt.js?](https://vueschool.io/lessons/what-is-nuxtjs)
##### Server Side Rendering
- Search Engine Optimization (SEO)
- Meta Tags
- Performance
##### Pre Rendering
- `.html` files are created upfront
- SSR benefits + free hosting
##### Code Splitting
- Performance
- Cheaper for the clients

#### [Create Nuxt App](https://vueschool.io/lessons/create-nuxt-app)

> <https://nuxtjs.org/guide/installation>

```bash
npx create-nuxt-app <project-name>
```
#### [Guided Nuxt.js Project Tour](https://vueschool.io/lessons/guided-nuxtjs-project-tour)


#### Working with Nuxt.js
##### [Customize the home page](https://vueschool.io/lessons/customize-the-home-page)
##### [Nuxt.js Page Components](https://vueschool.io/lessons/nuxtjs-page-components)
##### [Global CSS](https://vueschool.io/lessons/global-css)
##### [Adding a Navbar to Nuxt Apps](https://vueschool.io/lessons/adding-a-navbar-to-nuxt-apps)
##### [Dynamic Routes](https://vueschool.io/lessons/nuxtjs-dynamic-routes)
##### [Linking Between Pages](https://vueschool.io/lessons/linking-between-pages)
##### [Utilising the Vuex Store](https://vueschool.io/lessons/utilising-the-vuex-store-nuxtjs)
##### [SEO and Meta Tags](https://vueschool.io/lessons/nuxtjs-seo-and-meta-tags)

#### Build & Deploy
##### [Build and Serve the Nuxt.js App](https://vueschool.io/lessons/builde-and-serve-the-nuxtjs-app)
##### [How to Deploy Nuxt.js to Heroku](https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-heroku)
##### [How to Deploy Nuxt.js to Netlify](https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-netlify)





[&#8592; Menu](/menu/)
