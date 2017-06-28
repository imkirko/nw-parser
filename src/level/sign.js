
class Sign {
	/**
	 * Create new sign
	 * @param {int} x
	 * @param {int} y
	 * @param {string} [text]
	 */
	constructor(x, y, text='') {
		if (arguments.length < 2) {
			throw new Error('Missing arguments');
		}

		this.x = x;
		this.y = y;
		this.text = text;
	}
}

module.exports = Sign;