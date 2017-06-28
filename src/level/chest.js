
class Chest {
	/**
	 * Create new chest
	 * @param {int} x
	 * @param {int} y
	 * @param {string|int} item
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

module.exports = Chest;