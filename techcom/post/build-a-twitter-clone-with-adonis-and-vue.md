# Build a Twitter Clone With Adonis and Vue

- <https://scotch.io/courses/build-a-twitter-clone-with-adonis-and-vue/why-adonis>
- <https://github.com/PeterOnCode/scotch_io-courses-build-a-twitter-clone-with-adonis-and-vue>


## Why Adonis?

- <https://twitter.com/adonisframework>

[AdonisJS](http://dev.adonisjs.com/) is a Node.js MVC framework. It offers a stable eco-system to write web servers so that you can focus on business needs over finalizing which package to choose or not.

It was built by [Aman Virk](https://twitter.com/AmanVirk1).

## Progress

```bash
# 1. Install Adonis CLI
npm i -g @adonisjs/cli

# 2. Install Vue CLI
npm install -g vue-cli
```

## Create Adonis Apps

```bash
# 1. New app
adonis new tweetr-api --api-only
# 2. after installation
cd tweetr-api
adonis serve --dev
```

## Enabling CORS

Because we used the api-only boilerplate while creating our app, the [CORS (Cross-Origin Resource Sharing)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) package is already installed and setup for us.

The package comes with a configuration file which is located in `config/cors.js`.

```javascript
// config/cors.js

/*
  |--------------------------------------------------------------------------
  | Origin
  |--------------------------------------------------------------------------
  |
  | Set a list of origins to be allowed. The value can be one of the following
  |
  | Boolean: true - Allow current request origin
  | Boolean: false - Disallow all
  | String - Comma separated list of allowed origins
  | Array - An array of allowed origins
  | String: * - A wildcard to allow current request origin
  | Function - Receives the current origin and should return one of the above values.
  |
  */
  origin: true,

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  |
  | HTTP methods to be allowed. The value can be one of the following
  |
  | String - Comma separated list of allowed methods
  | Array - An array of allowed methods
  |
  */
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
```
## Database setup

```bash
npm install mysql --save
```

1. Look at `config/database.js`.
1. Open `.env` and update the DB details

```text
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=GQyg7fMX2tjcPiK5pzxyoyzwA6K9UOT7
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=adonis
DB_PASSWORD=adonis
DB_DATABASE=adonis
HASH_DRIVER=bcrypt
```
