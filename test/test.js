const nw = require('../src/');

nw.load('./test/levels/kirko.nw')
.then(level => {
	level.npcs.forEach(npc => {
		console.log(`Npc at (${npc.x}, ${npc.y})`);
	});
})
.catch(err => {
	console.log(`Couldn't load: ${err}`);
});
