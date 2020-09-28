const File = require("../Model/File");

const SongFile = function (filename, size, type, converted) {
    //TODO : ajout createdAt && seen
    File.call(this, filename, size, type);
    this.converted = converted;
};

module.exports = SongFile;