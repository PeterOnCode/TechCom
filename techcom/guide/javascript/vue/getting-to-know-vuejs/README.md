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

### Locale

1. [Adding Vue.js to Your Technology Stack](/post/vuejs-development-guide.md)

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

- <https://github.com/vuejs/vue-devtools>
- <https://www.browsersync.io/> or loading files during local
development.

```bash
npm init
npm install --save-dev browser-sync
#
browser-sync -w
```

### Summary


## Chapter 02 - The Basics

### Vue Options

### El

The `el` property allows us to specify where our Vue instance will mount
on the page. The value you provide can be a string that is a CSS selector.

> [_Listing 02-01_ - Mounting Vue with a CSS Selector](https://codepen.io/peteroncode/pen/)

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/02-01.html

> [_Listing 02-02_ - Mounting Vue with an HTMLElement](https://codepen.io/peteroncode/pen/)

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/02-02.html

When Vue is mounted to the HTML element that is provided, it replaces it with the Vue created DOM. The Vue DOM will contain the HTML that we provide as the template or the contents produced from the render function we provide.

If `template` and `render` are not provided, the HTML on the element that was
provided as the mounting point will be used as the template for Vue to render the DOM.

### Template

The `template` string is used by Vue to generate the DOM it will be placing in the web page in place of the element that was selected with the `el` option. __It must have one root element__. This will replace anything that is inside the element that the instance of Vue gets mounted to.

> [_Listing 02-04_ - Vue App with a Template](https://codepen.io/peteroncode/pen/)

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/02-04.html

### Render

The `render` function is a way to programmatically create templates in JavaScript.

The `render` function takes priority over templates and HTML templates.

### Data

We use the `data` property to tell our instance what shape our data will resemble.

If there is something we want to be able to bind to in our Vue instance, we need to include it in the `data` before we create our Vue instance.

When a new instance of Vue is created, _it adds all the properties of data to a reactive system_. __The Vue reactive system monitors the properties of the data object for changes and updates the view to “react” to those changes__.

We cannot add new data to be monitored by Vue’s reactive system after
the application starts. At the time you don’t know what the values of your `data` properties will be, define them with the names and give them a
value of an _empty string_, _`null`_, or _`undefined`_.

> [_Listing 02-07_ - HTML with emptyObject, emptyString, and nullProperty](https://codepen.io/peteroncode/pen/)

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/02-07.html

Names of the properties of the data object _must not start with_ `$` or `_`.

 Any properties that start with `$` or `_` will not be added to the reactive system, as they might cause conflicts with Vue’s internal properties and methods. Since they won’t be added to the reactive system, they also can’t be accessed in the template.

 > [_Listing 02-08_ - Trying to Use Data Properties That Start with `$` or `_`](https://codepen.io/peteroncode/pen/)

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/02-08.html

If you do include a property that starts with a `$` or `_`, you can access it on your instance of Vue from the $data property.

When an instance of Vue is created, the `data` object originally included is added to the instance as a property with the name `$data`. So, _if you assign your Vue instance to a variable called `app`_, you can access the original data object at `app.$data.propertyName`. You will also be able to access it in methods using the this context instead of through a saved reference to the `this.$data.propertyName` instance.

### Methods

Using methods, we can create custom code that will be bound to our instance of Vue.

> [_Listing 02-09_ - Method Declaration Example](https://codepen.io/peteroncode/pen/)

<<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/02-09.html

When creating methods for our Vue instance, we need to avoid using the _arrow function_ `()=>{}`, as it will prevent us from being able to access the proper context of `this`.

  > [_Listing 02-10_ - Binding a Method in the HTML](https://codepen.io/peteroncode/pen/)

  <<< @/techcom/guide/javascript/vue/getting-to-know-vuejs/listing/02-10.html

## Computed Properties

_Computed properties_ look very _similar to methods_, with one major difference — __the results are cached__. The values are updated only when the values that the computed property is based on change. 

[<- Menu](/menu/)
