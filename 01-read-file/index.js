const fs = require('fs');
const path = require('path');
const {stdout} = process;
const stream = fs.createReadStream(path.join('01-read-file', '/text.txt'), 'utf-8');

let data = '';

stream.on('data', chunk => stdout.write(data += chunk));
