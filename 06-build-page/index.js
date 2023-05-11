const path = require('path');
const fs = require('fs');
const dir = path.join(__dirname, 'project-dist');
const assets = path.join(__dirname, 'assets');
const assetsCopy = path.join('06-build-page/project-dist/assets');


fs.mkdir(dir, { recursive: true }, err => {
  if (err) throw err;

  fs.mkdir(assetsCopy, { recursive: true }, err => {
    if (err) throw err;

    fs.readdir(assets, (err, files) => {
      if (err) throw err;
      for (let file of files) {
        console.log(file);
        fs.copyFile(assets + '/' + file, dir + '/' + file, (err) => {
          if (err) throw err;
        })
      }
    });
  });

});



