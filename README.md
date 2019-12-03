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
import { join } from "@iyuo/join";
```

or JavaScript:

```javascript
var iyuo = require("@iyuo/join");
var join = iyuo.join;
```

# Documentation

Link: [https://iyuo.github.io/join/docs/index.html](https://iyuo.github.io/join/docs/index.html)

# Plugin Sample

## Left part

```ts
var c = new Context({
  sample1: "One",
  sample2: "Two",
  sample3: "Three"
}).make(
  join(JoinTypes.left, {
    sample2: "Dos",
    sample3: "Tres",
    sample4: "Quatro"
  })
);

console.log(c);
/*
expect(c.sample1).toBe("One");
expect(c.sample2).not.toBeDefined();
expect(c.sample3).not.toBeDefined();
expect(c.sample4).not.toBeDefined();
*/
```

## Right part

```ts
var c = new Context({
  sample1: "One",
  sample2: "Two",
  sample3: "Three"
}).make(
  join(JoinTypes.right, {
    sample2: "Dos",
    sample3: "Tres",
    sample4: "Quatro"
  })
);

console.log(c);
/*
expect(c.sample1).not.toBeDefined();
expect(c.sample2).not.toBeDefined();
expect(c.sample3).not.toBeDefined();
expect(c.sample4).toBe("Quatro");
*/
```

## Middle part

### Middle none

```ts
var c = new Context({
  sample1: "One",
  sample2: "Two",
  sample3: "Three"
}).make(
  join(JoinTypes.left | JoinTypes.right, {
    sample2: "Dos",
    sample3: "Tres",
    sample4: "Quatro"
  })
);

console.log(c);
/*
expect(c.sample1).toBe("One");
expect(c.sample2).not.toBeDefined();
expect(c.sample3).not.toBeDefined();
expect(c.sample4).toBe("Quatro");
*/
```

### Middle from left object

```ts
var c = new Context({
  sample1: "One",
  sample2: "Two",
  sample3: "Three"
}).make(
  join(JoinTypes.midLeft, {
    sample2: "Dos",
    sample3: "Tres",
    sample4: "Quatro"
  })
);

console.log(c);
/*
expect(c.sample1).not.toBeDefined();
expect(c.sample2).toBe("Two");
expect(c.sample3).toBe("Three");
expect(c.sample4).not.toBeDefined();
*/
```

### Middle from right object

```ts
var c = new Context({
  sample1: "One",
  sample2: "Two",
  sample3: "Three"
}).make(
  join(JoinTypes.midRight, {
    sample2: "Dos",
    sample3: "Tres",
    sample4: "Quatro"
  })
);

console.log(c);
/*
expect(c.sample1).not.toBeDefined();
expect(c.sample2).toBe("Dos");
expect(c.sample3).toBe("Tres");
expect(c.sample4).not.toBeDefined();
*/
```

### Middle merge

```ts
var c = new Context({
  sample1: "One",
  sample2: "Two",
  sample3: {
    smile: "cheese"
  }
}).make(
  join(JoinTypes.midMerge, {
    sample2: "Dos",
    sample3: {
      sorrir: "queijo"
    },
    sample4: "Quatro"
  })
);

console.log(c);
/*
expect(c.sample1).not.toBeDefined();
expect(c.sample2).toBe("Dos");
expect(c.sample3.smile).toBe("cheese");
expect(c.sample3.sorrir).toBe("queijo");
expect(c.sample4).not.toBeDefined();
*/
```

# Demo

See, how it's working: [https://runkit.com/lopatnov/join-demo](https://runkit.com/lopatnov/join-demo)

Test it with a runkit: [https://npm.runkit.com/@iyuo/join](https://npm.runkit.com/@iyuo/join)

# Rights and Agreements

License [Apache-2.0](https://github.com/iyuo/join/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov
