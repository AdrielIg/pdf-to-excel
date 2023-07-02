const fs = require('fs');
const pdf = require('pdf-parse');

 
const dataBuffer = fs.readFileSync('example/recibo.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // number of pages
    console.log({numPages: data.numpages});
    // number of rendered pages
    console.log({Numrenderpages: data.numrender});
    // PDF info
    console.log({info: data.info});
    // PDF metadata
    console.log({metadata: data.metadata}); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log({text: data.text}); 
        
});