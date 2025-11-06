const fs = require('fs');

// 1️⃣ Write a new file
fs.writeFile('example.txt', 'Hello prerna! 🌸', (err) => {
  if (err) throw err;
  console.log(' File created and written.');

  // 2️⃣ Read the file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(' File content:', data);

    // 3️⃣ Append more data
    fs.appendFile('example.txt', '\nThis is new data added later.', (err) => {
      if (err) throw err;
      console.log(' Data appended.');

      // 4️⃣ Rename the file
      fs.rename('example.txt', 'newExample.txt', (err) => {
        if (err) throw err;
        console.log('File renamed to newExample.txt');

        // 5️⃣ Read renamed file again
        fs.readFile('newExample.txt', 'utf8', (err, newData) => {
          if (err) throw err;
          console.log('Updated file content:', newData);

         
        });
      });
    });
  });
});