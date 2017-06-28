const readline  = require('readline');
const fs        = require('fs');
const constants = require('./constants');
const Level     = require('../level/level');
const Tile      = require('../level/tile');
const Link      = require('../level/link');
const Sign      = require('../level/sign');
const Chest     = require('../level/chest');
const Npc       = require('../level/npc');
const Baddy     = require('../level/baddy');

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
		var reading   = '';
		var contents  = '';
		var bCount    = 0; // Only used for baddies
		var bInfo     = []; // Only used for baddies
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

			// Check if reading for data
			if (reading) {
				if (line.startsWith(reading)) {
					if (reading === 'SIGNEND') {
						level.signs.last().text = contents.trim();
					} else if (reading === 'NPCEND') {
						level.npcs.last().text = contents.trim();
					} else if (reading === 'BADDYEND') {
						let baddy         = level.baddies.last();
						baddy.attackVerse = bInfo[0];
						baddy.hurtVerse   = bInfo[1];
						baddy.winVerse    = bInfo[2];

						bCount = 0;
						bInfo = [];
					}

					contents = '';
					reading  = false;
				} else {
					if (reading === 'BADDYEND') {
						bInfo.push(line);
						bCount ++;
					} else {
						contents += `${line}\n`;
					}
				}
			}

			// Read tile data
			else if (line.startsWith('BOARD')) {
				let [dataType, startX, startY, width, layerIndex, tilesData] = line.split(' ');

				for (let i = 0; i < width * 2; i += 2) {
					let tileX = startX + i / 2;
					level.tiles.push(new Tile(tileX, startY, layerIndex, tilesData.substr(i, 2)));
				}
			}

			// Links
			else if (line.startsWith('LINK')) {
				let [dataType, targetLevel, sourceX, sourceY, width, height, targetX, targetY] = line.split(' ');

				level.links.push(new Link(sourceX, sourceY, width, height, targetX, targetY, targetLevel));
			}

			// Chest
			else if (line.startsWith('CHEST')) {
				let [dataType, x, y, item, signIndex] = line.split(' ');

				level.chest.push(new Chest(x, y, item, signIndex));
			}

			// Sign
			else if (line.startsWith('SIGN')) {
				let [dataType, x, y] = line.split(' ');

				level.signs.push(new Sign(x, y));
				reading = 'SIGNEND';
			}

			// NPCs
			else if (line.startsWith('NPC')) {
				let [dataType, imageName, x, y] = line.split(' ');

				level.npcs.push(new Npc(x, y, imageName, ''));
				reading = 'NPCEND';
			}

			// Baddies
			else if (line.startsWith('BADDY')) {
				let [dataType, x, y, type] = line.split(' ');

				level.baddies.push(new Baddy(x, y, type));
				reading = 'BADDYEND';
			}

		});

		rl.on('close', () => {
			resolve(level);
		});
	});
}

function loadGmap() {}

module.exports = load;