const fs = require('fs');
const path = require('path');
const { stdout } = require('process');
const input = fs.ReadStream(path.join('01-read-file', 'text.txt'));
input.on('data', data => stdout.write(data));



