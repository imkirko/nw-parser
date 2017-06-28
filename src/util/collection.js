
class Collection extends Array {
	first() {
		return this[0];
	}

	last() {
		return this[this.length - 1];
	}
}

module.exports = Collection;