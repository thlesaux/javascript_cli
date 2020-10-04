const File = require("./File");

const VideoFile = function (filename, size, type, hd) {
    File.call(this, filename, size, type);
    this.hd = hd;
};

// Classe décorée
const VideoFileDecorator = function (videoFile) {
    VideoFile.call(this);
    this.videoFile = videoFile;

};

VideoFileDecorator.prototype = Object.create(VideoFile.prototype);
VideoFileDecorator.prototype.toDisplay = function () {

    let completeSentense = this.videoFile.hd ? ' qui est hd.' : ' qui n\'est pas hd.';

    return `Ceci est un fichier qui se nomme ${this.videoFile.filename},` +
        ` ayant pour format ${this.videoFile.type}, de taille ${this.videoFile.size}Mo` + completeSentense;
}


module.exports = {VideoFile, VideoFileDecorator};