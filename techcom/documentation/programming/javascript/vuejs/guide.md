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

`<techcom-toc page='$page'>`
- Installation
  - [Direct `<script>` Include](/documentation/programming/javascript/vuejs/guide.html#direct-script-include)
  - [NPM](/documentation/programming/javascript/vuejs/guide.html#npm)
  - [CLI](/documentation/programming/javascript/vuejs/guide.html#cli)
  - [Explanation of Different Builds](/documentation/programming/javascript/vuejs/guide.html#explanation-of-different-builds)
  - [Development vs. Production Mode](/documentation/programming/javascript/vuejs/guide.html#development-vs-production-mode)

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

> snippet 1-1 -

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

---

### Introduction

- [What is Vue.js?](documentation/programming/javascript/vuejs/guide.html#what-is-vue-js)
- [Getting Started](/documentation/programming/javascript/vuejs/guide.html#getting-started)
- [Declarative Rendering](/documentation/programming/javascript/vuejs/guide.html#declarative-rendering)
- [Conditionals and Loops](/documentation/programming/javascript/vuejs/guide.html#conditionals-and-loops)
- [Handling User Input](/documentation/programming/javascript/vuejs/guide.html#handling-user-input)
- [Composing with Components](/documentation/programming/javascript/vuejs/guide.html#composing-with-components)
  - [Relation to Custom Elements](/documentation/programming/javascript/vuejs/guide.html#relation-to-custom-elements)
- [Ready for More?](/documentation/programming/javascript/vuejs/guide.html#ready-for-more)

#### What is Vue.js?

> __Vue__ (pronounced /vjuː/, like view)

- Is a progressive framework for _building user interfaces_.
- Designed from the ground up to be _incrementally adoptable_.
- The _core library is focused on the view layer only_, and is easy to pick up and integrate with other libraries or existing projects.
- Vue is also perfectly capable of powering sophisticated _Single-Page Applications_ when used in combination with [modern tooling](https://vuejs.org/v2/guide/single-file-components.html) and [supporting libraries](https://github.com/vuejs/awesome-vue#components--libraries).

* Approachable
* Versatile
* Performant
* Maintainable
* Testable
* Reactive
* Progressive Framework

<https://vuejs.org/v2/guide/comparison.html>

#### Getting Started

#### Declarative Rendering



#### Conditionals and Loops
#### Handling User Input
#### Composing with Components
##### Relation to Custom Elements
#### Ready for More?

---

<!-- {{$page}} -->

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
