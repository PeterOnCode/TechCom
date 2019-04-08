# Getting to know Vue.js

<https://drive.google.com/open?id=1r4Cn6S3zAnO9bszJ4Xvk0r6gGdqHCMH8>

---

### Author

Brett Nelson

- [Just Some Apps](http://www.JustSomeApps.com)
- <http://WIPDeveloper.com>
- [Twitter :: @BrettMN](http://twitter.com/brettmn)

Passionate about continuous improvement through learning, sharing with others, and collaboration amongst the geek society.

[[toc]]

---

### Reources

1. [State of Vue.js](https://cdn2.hubspot.net/hubfs/1667658/State_of_vue/State%20of%20Vue.js%20report%202017%20by%20Monterail.pdf?t=1509106564387)
1. [Adding Vue.js to Your Technology Stack](https://www.monterail.com/vuejs-development-guide)

## Chapter 01 - Why Vue.js?

Take a look at the value that Vue.js brings to development and create our first app with Vue.

### The Value of Vue.js

Vue.js is called a _progressive framework_.

It allows you to start building your app with minimal effort as **the core Vue.js library focuses only on the view layer**.

--- 

Over time as the requirements grow, you can adapt additional libraries for functionality.

### Our First Vue.js Instance

> _Listing 01-01_ - Empty HTML file

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/01-01.html

---

Working Vue.js app, we need to add three things:

- An HTML element where we `mount` our app
- A `<script>` reference to Vue.js on the CDN
- A `<script>` element in which we create our app

---

> _Listing 01-02_ - The Structure of Our HTML Page

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/01-02.html

---

That’s all the setup we need before we create our first app.

The next step is to add some template syntax to our app’s `<div>` to bind some data to it.

_mustache syntax_: It consists of two curly braces surrounding the property name we want to inject the data from, such as in
<span v-pre>`{{ propertyName }}`</span>.

---

> _Listing 01-03_ - The HTML Template for Our App

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/01-03.html

---

> [_Listing 01-04_ - Our First Vue App!](https://codepen.io/peteroncode/pen/bJwyPz)

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/01-04.html

---



### Developer Tools

#### Browser Dev Tools

#### Browsersync

### Summary

[<- Menu](/menu/)
