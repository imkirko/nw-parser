
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

	/**
	 * Tile index number
	 * @return {int}
	 * @readonly
	 */
	get tileIndex() {
		let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		return base64.indexOf(this.chars[0]) * 64 + base64.indexOf(this.chars[1]);
	}

	/**
	 * X and Y coordinates of tile on tileset
	 * @return {[int,int]}
	 * @readonly
	 */
	get tilesetCoords() {
		let tile = this.tileIndex;
		return [((tile % 16) * 16) + (Math.floor(tile / 512) * 256), (Math.floor(tile / 16) * 16) % 512];
	}

	/**
	 * X position on tileset
	 * @return {int}
	 * @readonly
	 */
	get tilesetX() {
		return this.tilesetCoords[0];
	}

	/**
	 * Y position on tileset
	 * @return {int}
	 * @readonly
	 */
	get tilesetY() {
		return this.tilesetCoords[1];
	}
}

module.exports = Tile;