# meterstofeet.js

JavaScript conversion of meters to feet.

[![Build Status](https://travis-ci.org/joshause/meterstofeet.svg?branch=master)](https://travis-ci.org/joshause/meterstofeet)
[![Codacy](https://api.codacy.com/project/badge/grade/70e663db99fb4dfe8a474da8821dd640)](https://www.codacy.com/app/joshua-ause/meterstofeet)
[![npm](https://img.shields.io/npm/v/meters-to-feet.svg)](https://www.npmjs.com/package/meters-to-feet)
[![npm](https://img.shields.io/npm/dm/meters-to-feet.svg)](https://www.npmjs.com/package/meters-to-feet)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Install

```
$ npm install meters-to-feet
```

## Usage

### Node.js

```js
var MetersToFeet = require("meters-to-feet");
var mtf = new MetersToFeet();
mtf.get(1);
// => 3.28084
```

### Browser

(Add necessary `<script>` tag reference to `meterstofeet.js`)

```js
// MetersToFeet is autoloaded to window.MetersToFeet
var mtf = new MetersToFeet();
mtf.get(1);
// => 3.28084
```

## Tests

Jasmine

```bash
$ npm test
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
