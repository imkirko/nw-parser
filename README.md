NW Parser
============
Parses levels... and thats about it

Installation
============
```shell
npm install nw-parser
```

Example
=======
```javascript
var nw = require('nw-parser');

var level = require('../sample/mylevel.nw');
console.log(level.links.size);
```