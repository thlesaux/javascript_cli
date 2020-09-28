const File = require("./File");

const SongFile = function (filename, size, type, converted) {
    File.call(this, filename, size, type);
    this.converted = converted;
};

module.exports = SongFile;