const Tile       = require('./tile');
const Link       = require('./link');
const Sign       = require('./sign');
const Chest      = require('./chest');
const Npc        = require('./npc');
const Baddy      = require('./baddy');
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

		/**
		 * Chest collection
		 * @type {Collection<Chest>}
		 */
		this.chest = new Collection();

		/**
		 * Npc collection
		 * @type {Collection<Npc>}
		 */
		this.npcs = new Collection();

		/**
		 * Baddy collection
		 * @type {Collection<Baddy>}
		 */
		this.baddies = new Collection();
	}

	toString() {
		// todo:
	}
}

module.exports = Level;