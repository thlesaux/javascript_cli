const File = require("../Model/File");

const VideoFile = function (filename, size, type, hd) {
    //TODO : ajout createdAt && seen
    File.call(this, filename, size, type);
    this.hd = hd;
};

module.exports = VideoFile;