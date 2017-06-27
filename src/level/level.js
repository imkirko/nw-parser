const Tile = require('./tile');
const Collection = require('../util/collection');

class Level {
	constructor() {
		/**
		 * Tiles within the level
		 * @type {Collection.<Tile>}
		 */
		this.tiles = new Collection();
	}
}

module.exports = Level;