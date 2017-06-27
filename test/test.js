const nw = require('../src/');

nw.load('./test/levels/kirko.nw')
.then(level => {
	console.log(`Tiles: ${level.tiles.size}\nLinks: ${level.links.size}\nSigns: ${level.signs.size}`);
})
.catch(err => {
	console.log(`Couldn't load: ${err}`);
});
