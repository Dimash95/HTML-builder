const { stdin, stdout, exit } = process;

const fs = require('fs');
const path = require('path');
const os = require('os');

stdout.write('Привет! Введи текст:\n');
const output = fs.createWriteStream(path.join('02-write-file', 'notes.txt'));


stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  } else {
    output.write(data);
  }
});

process.on('exit', () => stdout.write('\nУдачи!'));
process.on('SIGINT', () => exit());