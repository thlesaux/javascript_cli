const File = require("./File");

const PhotoFile = function (filename, size, type, pixelNumber) {
    File.call(this, filename, size, type);
    this.pixelNumber = pixelNumber;
};

module.exports = PhotoFile;