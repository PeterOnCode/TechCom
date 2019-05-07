---
title: Vuepress Book
lastUpdated: 2019-04-18
lang: en-US
meta:
  - name: description
    content: nest, javascript
  - name: keywords
    content: Javascript, nest
features:
  - title: Coding Problem
    details: Coding Problem, Data structures and algorithms
  - title: Guide
    details: Exhibits and explains points of interest
  - title: Interview Question
    details: Interview questions all about programming languages.
  - title: Reference Card
    details: Cheatsheets
---

# {{ $page.title }}

@
{{ $page.frontmatter.lastUpdated }}

[[toc]]

## Resources

- <https://vuepressbook.com/introduction.html#who-s-the-audience-for-vuepress>
- <https://medium.com/vue-mastery/how-to-create-a-custom-vuepress-theme-with-vuetify-651b7d7e5092>
-

## New features for TechCom

### Components

1. `<techcom-toc page=$page>`
    Az összes route lehetőség kibontva.
1. `<techcom-breadcrumbs page=$page>`


## Samples

### H3

```javascript{4}
export default {
  data() {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

::: tip Tip Title
This is a tip
:::

:tiger:

<span v-for="i in 3">{{ i }} </span>

::: v-pre
`{{ This will be displayed as-is }}`
:::

### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

[Menu](/menu/)

---

{{ $site }}

---

{{ $page }}
