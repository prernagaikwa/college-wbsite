const fs = require('fs');

fs.mkdir("C:/Users/gaikw/NODE/info.txt", (err) => {
  if (err) {
    // Handle error (e.g., directory already exists)
  } else {
    console.log('Directory created');
  }
});
