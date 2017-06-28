
class Npc {
	/**
	 *
	 * @param {float} x
	 * @param {float} y
	 * @param {string} [imageName='-']
	 * @param {string} [text]
	 */
	constructor(x, y, imageName='-', text='') {
		this.x = x;
		this.y = y;
		this.imageName = imageName;
		this.text = text;
	}
}

module.exports = Npc;