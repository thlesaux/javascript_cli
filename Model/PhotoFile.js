const File = require("../Model/File");

const PhotoFile = function (filename, size, type, pixelNumber) {
    //TODO : ajout createdAt && seen
    File.call(this, filename, size, type);
    this.pixelNumber = pixelNumber;
};

module.exports = PhotoFile;