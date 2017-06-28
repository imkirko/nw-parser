
class Baddy {
	/**
	 * Create new baddy
	 * @param {float} x
	 * @param {float} y
	 * @param {string|int} type
	 * @param {string} [attackVerse]
	 * @param {string} [hurtVerse]
	 * @param {string} [winVerse]
	 */
	constructor(x, y, type, attackVerse, hurtVerse, winVerse) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.attackVerse = attackVerse;
		this.hurtVerse = hurtVerse;
		this.winVerse = winVerse;
	}
}

module.exports = Baddy;