
class Tile {
	/**
	 * Creates new tile object
	 * @param {int} x - X position of tile
	 * @param {int} y - Y position of tile
	 * @param {int} layer - Layer index
	 * @param {string} chars - Two base64 characters representing tile
	 */
	constructor(x, y, layer, chars) {
		this.x = x;
		this.y = y;
		this.layer = layer;
		this.chars = chars;
	}
}

module.exports = Tile;