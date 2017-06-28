const nw = require('../src/');

nw.load('./test/levels/kirko.nw')
.then(level => {
	let tile = level.tiles.first();
	console.log(`Tile: ${tile.chars}\ndecode: ${tile.tilesetCoords}`)
})
.catch(err => {
	console.log(`Couldn't load: ${err}`);
});
