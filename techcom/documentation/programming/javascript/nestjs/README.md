# Nest.js Documentation


[[toc]]

## Resources

- Base: <https://docs.nestjs.com>
- Author: [Kamil Myśliwiec](https://kamilmysliwiec.com/)
- Website: <https://nestjs.com>
- Twitter: [@nestframework](https://twitter.com/nestframework)
- Article - [Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)


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

### First steps

1. `main.ts` : The entry file of the application. It uses `NestFactory` to create the Nest application instance.
1. `app.module.ts` : Defines `AppModule`, the root module of the application.
1. `app.controller.ts` : Basic controller sample with a single route.

---

`NestFactory` is one of the most fundamental classes, it exposes a few static methods that allows creating application instance.

The `create()` method returns an object, which fulfills the INestApplication interface, and provides a set of usable methods

### Controllers

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
 - @Put(),
 - @Delete(),
 - @Patch(),
 - @Options(),
 - @Head(), and
 - @All().

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

#### Route parameters

```JavaScript
@Get(':id')
findOne(@Param() params) {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```

```javascript
@Get(':id')
findOne(@Param('id') id) {
  return `This action returns a #${id} cat`;
}
```

## Fundamentals
## Techniques
## GraphQL
## Websockets
## Microservices
## Application Context
## Recipes
## CLI
## FAQ
