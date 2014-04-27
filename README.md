
# Path Is

Check what type of path a string is according to CSS `@import` semantics,
which is most likely how all web resources will be handled.

```
var is = require('path-is')

// remote URIs
is.url('//google.com') // => true
is.absolute('/something/long') // => true
is.relative('something') // true
is.relative('./something') // true

// local URIs
is.absolute('/User/jong') // => true
is.relative('C:\\something') // => false
```
