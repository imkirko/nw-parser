
class Tile {
	/**
	 * Create a level tile
	 * @param {int} x - X position of tile
	 * @param {int} y - Y position of tile
	 * @param {int} layer - Layer index
	 * @param {string} chars - Two base64 characters representing tile
	 */
	constructor(x, y, layer, chars) {
		if (arguments.length < 4) {
			throw new Error('Missing arguments');
		}

		this.x = x;
		this.y = y;
		this.layer = layer;
		this.chars = chars;
	}
}

module.exports = Tile;