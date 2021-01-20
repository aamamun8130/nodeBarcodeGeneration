const bwipjs = require('bwip-js');
const fs = require('fs');

bwipjs.toBuffer({
    bcid:        'code128',       // Barcode type
    text:        '0123456789',    // Text to encode
    scale:       3,               // 3x scaling factor
    height:      10,              // Bar height, in millimeters
    includetext: false,            // Show human-readable text
    textxalign:  'center',        // Always good to set this
})
.then(png => {
    fs.writeFileSync("new-path.png", png);
    // `png` is a Buffer as in the example above
})
.catch(err => {
    // `err` may be a string or Error object
    console.log("Something error occur!!!")
});