const File = require("./File");

const VideoFile = function (filename, size, type, hd) {
    File.call(this, filename, size, type);
    this.hd = hd;
};

module.exports = VideoFile;