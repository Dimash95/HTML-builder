let path = require('path');
let fs = require('fs');
let dir = path.join(__dirname, 'files');
let dircopy = path.join(__dirname, 'files-copy');


fs.stat(dircopy, function (err) {
  if (!err) {
    console.log('Директория есть');
    fs.readdir(dircopy, (err, files) => {
      if (err) throw err;
      for (let file of files) {
        fs.unlink(dircopy + '/' + file, (err) => {
          if (err) throw err;
        }
        )
      }
      fs.readdir(dir, (err, files) => {
        if (err) throw err;
        for (let file of files) {
          fs.copyFile(dir + '/' + file, dircopy + '/' + file, (err) => {
            if (err) throw err;
          })
        }
      });
    })
  } else if (err.code === 'ENOENT') {
    console.log('директории нет');
    fs.mkdir(dircopy, err => {
      if (err) throw err;
      fs.readdir(dir, (err, files) => {
        if (err) throw err;
        for (let file of files) {
          fs.copyFile(dir + '/' + file, dircopy + '/' + file, (err) => {
            if (err) throw err;
          })
        }

      });
    });
  }
});
