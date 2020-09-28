const File = require("./File");

const TextFile = function (filename, size, type, encrypted) {
    File.call(this, filename, size, type);
    this.encrypted = encrypted;
};

module.exports = TextFile;