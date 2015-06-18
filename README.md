# meterstofeet.js

JavaScript conversion of meters to feet.

[![Build Status](https://travis-ci.org/joshause/meterstofeet.svg?branch=master)](https://travis-ci.org/joshause/meterstofeet)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Usage

### Node.js

```js
var MetersToFeet = require("meterstofeet");
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

```bash
$ jasmine
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
