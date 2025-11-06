const fs = require('fs');

fs.readdir("C:/Users/gaikw/NODE/info.txt",(err, files) => {
  if (err) {
    // Handle error
  } else {
    console.log(`Contents: ${files}`); // e.g., ['file1.txt', 'subdir']
  }
});
