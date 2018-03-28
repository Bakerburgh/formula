[![Circle CI](https://circleci.com/gh/FormBucket/formula.svg?style=svg)](https://circleci.com/gh/FormBucket/formula)

Formula expressions and functions for JavaScript.

## Install

```sh
npm install --save formula
```

## General Usage

```js
import { RUN } from 'formula'
RUN("sum(a, b, c) = 1+2+3", { a: 1, b: 2, c: 3})
```

## Browser ready

Add to the browser with:

```html
<script type="text/javascript" src="https://unpkg.com/formula@3.3.0/lib/formula.min.js"
```

## About this project

Project by <a href="https://formbucket.com">FormBucket</a>
