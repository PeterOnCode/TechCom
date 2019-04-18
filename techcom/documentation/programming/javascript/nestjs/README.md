---
title: Nest.js Documentation
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

- Base: <https://docs.nestjs.com>
- Author: [Kamil Myśliwiec](https://kamilmysliwiec.com/)
- Website: <https://nestjs.com>
- Twitter: [@nestframework](https://twitter.com/nestframework)
- Article - [Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)
- <https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json>


## Introduction

__Nest__ is a _framework_ for:
- building efficient,
- scalable

__Node.js server-side applications__.

---

- It uses [_progressive JavaScript_](https://en.wikipedia.org/wiki/Progressive_web_applications),
- is built with [_TypeScript_](https://www.typescriptlang.org/docs/home.html) (preserves compatibility with pure JavaScript)
- combines elements of
  - [_OOP (Object Oriented Programming)_](https://en.wikipedia.org/wiki/Object-oriented_programming),
  - [_FP (Functional Programming)_](https://en.wikipedia.org/wiki/Functional_programming), and
  - [_FRP (Functional Reactive Programming)_](https://en.wikipedia.org/wiki/Functional_reactive_programming).

---

Under the hood, Nest makes use of [_Express_](http://expressjs.com), but also provides compatibility with a wide range of other libraries (e.g. [_Fastify_](https://www.fastify.io/docs/latest/Getting-Started/)). This allows for easy use of the myriad third-party plugins which are available.

---

While plenty of superb libraries, helpers, and tools exist for Node, none of them effectively solve the main problem -

__architecture__.

---

Nest provides:
-  an _out-of-the-box application architecture_ which allows for effortless creation of:
    - highly testable,
    - scalable,
    - loosely coupled, and
    - easily maintainable applications.

---

```bash
npm i -g @nestjs/cli
nest new project-name
```

Or start a new project from scratch

```bash
npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```

## Overview

`<techcom-toc>`

### First steps

1. `main.ts` : The entry file of the application. It uses `NestFactory` to create the Nest application instance.
1. `app.module.ts` : Defines `AppModule`, the root module of the application.
1. `app.controller.ts` : Basic controller sample with a single route.

---

`NestFactory` is one of the most fundamental classes, it exposes a few static methods that allows creating application instance.

The `create()` method returns an object, which fulfills the INestApplication interface, and provides a set of usable methods

### Controllers

`<techcom-toc>`

Controllers are responsible for:
-  handling incoming requests and
- returning responses to the client.

---

A controller's purpose is to _receive specific requests_ for the application. The _routing mechanism_ controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

---

In order to create a basic controller, we use classes and __decorators__. Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

---

#### Routing

```bash
nest g controller cats
```

> cats.controller.ts


```javascript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }
}
```

---

When we return a JavaScript object or array, it'll be _automatically serialized to JSON_. When we return a string however, Nest will send just a string without attempting to serialize it.

The response's _status code_ is always __200 by default__, except for POST requests which use __201__. We can easily change this behaviour by adding the `@HttpCode(...)` _decorator_ at a handler-level.

---

#### Request object

<http://expressjs.com/en/api.html#req>

We can force Nest to inject the request object into the handler using the `@Req()` decorator.

> cats.controller.ts

```javascript
import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request) {
    return 'This action returns all cats';
  }

  @Get('/find2')
   findAll2(@Query(ok:string) q): object {
     return { message: `QueryString: {ok: '${q.ok}'}` }
   }

}
```

---

Decorators:
- `@Request()`
- `@Response()`
- `@Next()`
- `@Session()`
- `@Param(param?: string)`
- `@Body(param?: string)`
- `@Query(param?: string)`
- `@Headers(param?: string)`

---

#### Resources

```bash
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/cats/ --data '{"user":{"name":"john"}}'
```

> cats.controller.ts

```JavaScript
import { Controller, Get, Req, Query, Post, Body } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Post('/')
  create(@Body() b): string {
        return `Body: ${body.user.name}`
  }

  @Get('/')
  findAll(): string {
    return 'This action returns all cats'
  }

  @Get('/find2')
  findAll2(@Query('param1') param1): object {
    return { message: `QueryString: {ok: '${param1}'}` }
  }

  @Get('/withreq')
  findEvery(@Req() req): string {
    return `hostname: ${req.hostname} hello__233`
  }
}

```
---

 Endpoint decorators in the same fashion:
 - `@Put()`,
 - `@Delete()`,
 - `@Patch()`,
 - `@Options()`,
 - `@Head()`,
 - `@All()`.

 All of them represent respective HTTP request methods.

---

#### Route wildcards

Pattern based routes are supported as well.

```JavaScript
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

The characters
- `?`,
- `+`,
- `*`, and
- `()`
are subsets of their regular expression counterparts.

The hyphen (`-`) and the dot (`.`) are interpreted literally by string-based paths.

#### Status code

The response status code is always `200` by default, except for POST requests which are `201`. We can easily change this behaviour by adding the `@HttpCode(...)` decorator at a handler-level.

```JavaScript
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```

#### Headers

To specify a __custom response header__, you can either use:
-  a `@Header()` decorator or
- a library-specific response object.

[List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

> Request:

```bash
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3000/cats/ --data '{"user":{"name":"john"}}'
```

> Controller

```javascript
@Post('/')
@Header('Cache-Control', 'none')
create(@Body() body): string {
  return `Body:  ${body.user.name}`
}
```

> Response:

```bash
X-Powered-By: Express
Cache-Control: none
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Nh2RQ5I8jb/49L9v+Lchm0k2aH4"
Date: Wed, 17 Apr 2019 10:33:07 GMT
Connection: keep-alive

Body:  john

```

#### Route parameters


Accept dynamic data as part of the request.

We can add __route parameter tokens__ in the path of the route to capture the dynamic value at that position in the request URL.

Route parameters declared in this way can be accessed using the `@Param()` decorator, which should be added to the method signature.

```JavaScript
@Get('/:id')
findOne(@Param() params) {
  console.log(params.id);
  return `This action returns a #${params.id} puli`;
}
```

```JavaScript
@Get(':id')
findOne(@Param('id') id): string {
  return `This action returns a #${id} puli`;
}
```

#### Routes order

Route registration order (the order each route's method appears in a class) matters.

#### Scopes

 In Nest, almost everything is shared across incoming requests.

 Node.js doesn't follow the _request/response_ __Multi-Threaded Stateless Model__ in which every request is processed by a separate thread. Hence, using singleton instances is fully safe for our applications.

#### Asynchronicity

<https://kamilmysliwiec.com/typescript-2-1-introduction-async-await>

Every async function has to return a `Promise`. This means that you can return a deferred value that Nest will be able to resolve by itself.

```javascript
@Get('/promise')
async findAllPromise(): Promise<any[]> {
  return ['puli']
}
```

<http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html>

#### Request payloads

 We need to determine the __DTO (Data Transfer Object)__ schema.

 A DTO is an object that defines how the data will be sent over the network.

 We could determine the DTO schema by using TypeScript interfaces, or by simple classes.

`CreatePuliDto` class:

```js
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
```

```javascript
@Post('/createPuli')
 async createPuli(@Body() puli: CreatePuliDto) {
   // async createPuli(@Req() req) {
   return 'This action adds a new puli: ' + puli.age
 }
 ```

 #### Handling errors

 >>>>>>>>>>>>>>>> Exception filters

#### Full resource sample

```js
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }
}
```

### Providers

<https://docs.nestjs.com/providers>

### Modules

### Middleware

### Exception filters

### Pipes

### Guards

### Interceptors

### Custom Decorators


## Fundamentals
## Techniques
## GraphQL
## Websockets
## Microservices
## Application Context
## Recipes
## CLI
## FAQ
