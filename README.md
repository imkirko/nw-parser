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

nw.load('./test/levels/kirko.nw')
.then(level => {
	level.npcs.forEach(npc => {
		console.log(`Npc at (${npc.x}, ${npc.y})`);
	});
})
.catch(err => {
	console.log(`Couldn't load: ${err}`);
});
```

Todo
====
- Parse gmap files
	- Load all levels and return them in array
- Export as text