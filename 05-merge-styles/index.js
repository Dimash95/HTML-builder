let path = require('path');
let fs = require('fs');

const styles = path.join(__dirname, 'styles');
const bundle = (path.join(__dirname, 'project-dist', 'bundle.css'));


fs.stat(bundle, function (err) {
  if (!err) {
    fs.unlink(bundle, (err) => {
      if (err) throw err;
    })
  }

  fs.readdir(styles, 'utf-8', (err, files) => {
    if (err) throw err
    for (let file of files) {
      if (file.includes('css')) {
        let input = fs.createReadStream(path.join(styles, file));
        input.on('data', data => {
          fs.appendFile(bundle, data, function (err) {
            if (err) throw err;
          })
        })
      }
    }
  });

})



