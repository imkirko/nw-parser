NW Parser
============
Parse .nw files into level objects

Installation
============
```shell
npm install nw-parser
```

Example
=======
```javascript
const nw = require('nw-parser');

nw.load('./levels/myLeve.nw')
.then(level => {
	console.log(`Ammount of tiles: ${level.tiles.size}`);
})
.catch(err => {
	console.log(`Couldn't load: ${err}`);
});
```

Todo
====
- Parse gmap files
	- Load all levels and return them in array
- Level Editing
	- Adding links, npcs, etc.
	- Saving