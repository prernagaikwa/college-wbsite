const fs = require('fs');

fs.stat("C:/Users/gaikw/NODE/info.txt", (err, stats) => {
  if (err) {
  } else {
    console.log(`Is a file: ${stats.isFile()}`);
    console.log(`Is a directory: ${stats.isDirectory()}`);
    console.log(`Size: ${stats.size} bytes`);
  }
});
