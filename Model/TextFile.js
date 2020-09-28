const File = require("../Model/File");

const TextFile = function (filename, size, type, encrypted) {
    //TODO : ajout createdAt && seen
    File.call(this, filename, size, type);
    this.encrypted = encrypted;
};

module.exports = TextFile;