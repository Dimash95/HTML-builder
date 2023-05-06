const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const { stdout } = process;

stdout.write('\nФайлы папки "secret-folder":\n\n');

fsPromises.readdir(path.join(__dirname, 'secret-folder'), {
  withFileTypes: true
}).then(elements => {
  elements.forEach(
    el => {
      if (el.isFile()) {
        const filePath = path.join(__dirname, 'secret-folder', el.name);
        const fileData = fsPromises.stat(filePath);
        const ext = path.extname(el.name);
        const fileName = el.name.slice(0, el.name.length - ext.length);
        fileData.then((data) => {
          let fileSize = data.size;
          stdout.write(`${fileName} - ${ext.slice(1)} - ${fileSize / 1000} kb\n`);
        })
      }
    });
})

process.on('exit', () => stdout.write('\nПрограмма завершена.\n\n'));
process.on('error', error => console.log('Error', error.message));
process.on('SIGINT', () => exit());