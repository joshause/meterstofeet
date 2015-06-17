# meterstofeet.js

JavaScript conversion of meters to feet.

## Usage

### Node.js

```js
var MetersToFeet = require("./meterstofeet");
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
