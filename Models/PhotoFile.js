const File = require("./File");

// Décorateur ?

// Exemple -->
// const PhotoFile = function(file, pixelNumber) {
//     File.call(this) = file;
//     this.pixelNumber = pixelNumber;
// };


const PhotoFile = function (filename, size, type, pixelNumber) {
    File.call(this, filename, size, type);
    this.pixelNumber = pixelNumber;
};

module.exports = PhotoFile;