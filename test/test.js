const nw = require('../src/');

nw.load('./test/levels/kirko.nw')
.then(level => {
	console.log(`Test: ${level.baddies.last().winVerse}`);
})
.catch(err => {
	console.log(`Couldn't load: ${err}`);
});
