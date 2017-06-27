
class Sign {
	/**
	 * Create new sign
	 * @param {int} x
	 * @param {int} y
	 * @param {string} item - Item name or index
	 * @param signIndex
	 */
	constructor(x, y, item, signIndex) {
		if (arguments.length < 4) {
			throw new Error('Missing arguments');
		}

		this.x = x;
		this.y = y;
		this.item = item;
		this.signIndex = signIndex;
	}
}

module.exports = Sign;