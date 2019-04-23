---
title: Vue.js Documentation - Guide
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

- Guide: <https://vuejs.org/v2/guide/>

---

## Essentials
### Installation

 The [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools) in your browser, allowing you to inspect and debug your Vue applications in a more user-friendly interface.

#### Direct `<script>` Include

> CDN

For prototyping or learning:

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

For production:

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
```

Source:

<https://cdn.jsdelivr.net/npm/vue/>

---

#### NPM

```bash
# latest stable
$ npm install vue
```

#### CLI

- <https://github.com/vuejs/vue-cli>
- <https://cli.vuejs.org/>

---

#### Explanation of Different Builds

- __Full__: builds that contain both the compiler and the runtime.
- __Compiler__: code that is responsible for
  - compiling template strings into JavaScript render functions.

  If you need to compile templates on the client, you will need the compiler and thus the full build.

  ```javascript
  // this requires the compiler
  new Vue({
    template: '<div>{{ hi }}</div>'
  })

  // this does not
  new Vue({
    render (h) {
      return h('div', this.hi)
    }
  })
  ```
- __Runtime__: code that is responsible for
  - creating Vue instances,
  - rendering and patching virtual DOM,
  - etc. Basically everything minus the compiler.

  When using [`vue-loader`](https://vue-loader.vuejs.org/#what-is-vue-loader), templates inside `*.vue` files are _pre-compiled into JavaScript at build time_. You don’t really need the compiler in the final bundle, and can therefore use the runtime-only build.

---

##### Development vs. Production Mode

The un-minified files are for development, and the minified files are for production.


### Introduction
#### What is Vue.js?
#### Getting Started
#### Declarative Rendering
#### Conditionals and Loops
#### Handling User Input
#### Composing with Components
##### Relation to Custom Elements
#### Ready for More?

-----

### The Vue Instance
  - Template Syntax
  - Computed Properties and Watchers
  - Class and Style Bindings
  - Conditional Rendering
  - List Rendering
  - Event Handling
  - Form Input Bindings
  - Components Basics
- Components In-Depth
  - Component Registration
  - Props
  - Custom Events
  - Slots
  - Dynamic & Async Components
  - Handling Edge Cases
- Transitions & Animation
  - Enter/Leave & List Transitions
  - State Transitions
- Reusability & Composition
  - Mixins
  - Custom Directives
  - Render Functions & JSX
  - Plugins
  - Filters
- Tooling
  - Single File Components
  - Unit Testing
  - TypeScript Support
  - Production Deployment
- Scaling Up
  - Routing
  - State Management
  - Server-Side Rendering
- Internals
  - Reactivity in Depth
- Migrating
  - Migration from Vue 1.x
  - Migration from Vue Router 0.7.x
  - Migration from Vuex 0.6.x to 1.0
- Meta
  - Comparison with Other Frameworks
  - Join the Vue.js Community!
  - Meet the Team

[&#8592; Menu](/menu/)
