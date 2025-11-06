const fs = require('fs');

fs.rmdir("C:/Users/gaikw/NODE/hello1.txt", (err) => {
  if (err) {
    
  } else {
    console.log('Directory deleted');
  }
});
