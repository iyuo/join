# join

[![NPM version](https://badge.fury.io/js/%40iyuo%2Fjoin.svg)](https://www.npmjs.com/package/@iyuo/join)
[![License](https://img.shields.io/github/license/iyuo/join)](https://github.com/iyuo/join/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjoin)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjoin)

The TypeScript plugin join for [@iyuo/context](https://iyuo.github.io/context/) ecosystem.

# Install

Node:

[![https://nodei.co/npm/@iyuo/join.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@iyuo/join.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@iyuo/join)

```shell
npm install @iyuo/join
```

[Browser](//iyuo.github.io/join/dist/join.js)

```html
<script src="//iyuo.github.io/join/dist/join.min.js"></script>
```

## Import package to the project

TypeScript:

```typescript
import { join, ns } from "@iyuo/join";
```

or JavaScript:

```javascript
var iyuo = require("@iyuo/join");
var join = iyuo.join;
```

# Documentation

Link: [https://iyuo.github.io/join/docs/index.html](https://iyuo.github.io/join/docs/index.html)

# Plugin Sample

```ts
let obj: any = {};
new Context(obj)
.task(ns("uno.dos.tres"))
.task(ns("quatro.cinco.seis"));

console.log(obj);
```

# Function Sample

```ts
let obj: any = {};
join.call(obj, "uno.dos.tres"); // new Context(obj).task(ns("uno.dos.tres"))
join.call(obj, "quatro.cinco.seis"); // .task(ns("quatro.cinco.seis"));

console.log(obj);
```

```ts
let obj: any = {};
let c = new Context(obj);
c.map(join, "uno.dos.tres")
 .map(join, "quatro.cinco.seis");

console.log(obj.uno.dos.tres.quatro.cinco.seis);
```

# Demo

See, how it's working: [https://runkit.com/lopatnov/join-demo-1-3-2](https://runkit.com/lopatnov/join-demo-1-3-2)

Test it with a runkit: [https://npm.runkit.com/@iyuo/join](https://npm.runkit.com/@iyuo/join)

# Rights and Agreements

License [Apache-2.0](https://github.com/iyuo/join/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov
