console.log('This is the first JavaScript file.');
const fs = require('fs');

fs.writeFile('output.txt', 'write File', (err) => {
    if (err) console.log('Error writing file:', err);
    else{
        console.log('File written successfully.');
    }
});
console.log('File written successfully.');