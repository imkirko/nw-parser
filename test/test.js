const nw = require('../src/');

nw.load('./test/levels/kirko.nw')
.then(level => {
	console.log(`Loaded: ${level.tiles.size}`);
})
.catch(err => {
	console.log(`Couldn't load: ${err}`);
});
