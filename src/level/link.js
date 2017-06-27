
class Link {
	/**
	 * Create a level link
	 * @param {int} sourceX
	 * @param {int} sourceY
	 * @param {int} width
	 * @param {int} height
	 * @param {float} targetX
	 * @param {float} targetY
	 * @param {string} targetName
	 */
	constructor(sourceX, sourceY, width, height, targetX, targetY, targetName) {
		if (arguments.length < 7) {
			throw new Error('Missing arguments');
		}

		this.sourceX = sourceX;
		this.sourceY = sourceY;
		this.width = width;
		this.height = height;
		this.targetX = targetX;
		this.targetY = targetY;
		this.targetName = targetName;
	}
}

module.exports = Link;