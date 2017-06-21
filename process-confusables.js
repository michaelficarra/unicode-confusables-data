let fs = require('fs');
let raw = fs.readFileSync('./confusables.txt').toString();
let lines = raw.split(/[\r\n]+/g);
let map = {};
for (let line of lines) {
  line = line.trim();
  if (line === '' || line[0] === '#') continue;
  let split = line.split(';');
  let from = readCp(split[0]);
  let to = split[1].trim().split(/\s+/g).map(readCp);
  map[from] = to.join('');
}

function readCp(cp) {
  return String.fromCodePoint(parseInt(cp.trim(), 16));
}

fs.writeFileSync('./confusables.json', JSON.stringify(map));
