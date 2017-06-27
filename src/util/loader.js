const readline  = require('readline');
const fs        = require('fs');
const constants = require('./constants');
const Level     = require('../level/level');
const Tile      = require('../level/tile');

/**
 * Parses file into Level object
 * @param {string} file - File to parse
 * @param {Object} [options] - Options to provide
 * @param {string} [options.file] - File to parse
 * @return {Promise<Level>} - The parsed level object
 */
function load(file, options = {}) {
	return new Promise((resolve, reject) => {

		// Get file
		var fileName = options.file || file;
		if (!fileName) {
			return reject('Must give a file');
		}

		// Check if file exist
		if (!fs.existsSync(fileName)) {
			return reject(`No such file, ${fileName}`);
		}

		var level     = new Level();
		var firstLine = false;
		var rl        = readline.createInterface({
			input: fs.createReadStream(fileName)
		});

		rl.on('line', line => {

			// Check level signature
			if (!firstLine) {
				if (line === 'GRMAP001') return reject(`GMAPs aren't supported at the moment`);
				if (line !== 'GLEVNW01') return reject('Wrong signature');
				firstLine = true;
			}

			// Read tile data
			if (line.startsWith('BOARD')) {
				let [board, startX, startY, width, layerIndex, tilesData] = line.split(' ');

				for (let i = 0; i < width * 2; i += 2) {
					let tileX = startX + i / 2;
					level.tiles.add(new Tile(tileX, startY, layerIndex, tilesData.substr(i, 2)));
				}
			}

			// Links
			// Signs
			// Baddies
			// Chest
			// NPCs
		});

		rl.on('close', () => {
			resolve(level);
		});
	});
}

function loadGmap()
{}

module.exports = load;