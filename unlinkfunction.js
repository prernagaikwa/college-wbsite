const fs = require('fs');

fs.unlink("C:/Users/gaikw/NODE/Hello.txt", (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});