const fs = require('fs');
const text = "this is a file system program";

fs.writeFile('original.txt', text, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  
  console.log('File created and data written successfully.');

  fs.readFile('original.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('Data read from original file:', data);

    const uppercaseData = data.toUpperCase();

    fs.writeFile('transferred.txt', uppercaseData, (err) => {
      if (err) {
        console.error('Error transferring file:', err);
        return;
      }
      console.log('Data transferred to another file successfully.');
    });
  });
});