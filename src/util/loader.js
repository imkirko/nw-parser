const readline  = require('readline');
const fs        = require('fs');
const constants = require('./constants');
const Level     = require('../level/level');
const Tile      = require('../level/tile');
const Link      = require('../level/link');
const Sign      = require('../level/sign');

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
				if (line !== 'GLEVNW01') return reject(`This isn't a level file`);
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
			else if (line.startsWith('LINK')) {
				let [targetLevel, sourceX, sourceY, width, height, targetX, targetY] = line.split(' ');

				level.links.add(new Link(sourceX, sourceY, width, height, targetX, targetY, targetLevel));
			}

			// Signs
			else if (line.startsWith('CHEST')) {
				let [x, y, item, signIndex] = line.split(' ');

				level.signs.add(new Sign(x, y, item, signIndex));
			}

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