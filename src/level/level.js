const Tile = require('./tile');
const Link = require('./link');
const Sign = require('./sign');
const Collection = require('../util/collection');

class Level {
	constructor() {
		/**
		 * Tile collection
		 * @type {Collection<Tile>}
		 */
		this.tiles = new Collection();

		/**
		 * Link collection
		 * @type {Collection<Link>}
		 */
		this.links = new Collection();

		/**
		 * Sign collection
		 * @type {Collection<Sign>}
		 */
		this.signs = new Collection();
	}
}

module.exports = Level;