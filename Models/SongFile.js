const File = require("./File");

const SongFile = function (filename, size, type, converted) {
    File.call(this, filename, size, type);
    this.converted = converted;
};

// Classe décorée
const SongFileDecorator = function (songFile) {
    SongFile.call(this);
    this.songFile = songFile;
};

SongFileDecorator.prototype = Object.create(SongFile.prototype);

SongFileDecorator.prototype.toDisplay = function () {
    let completeSentense = this.songFile.converted ? ' qui est convertible.' : ' qui n\'est pas convertible.';

    return `Ceci est un fichier qui se nomme ${this.songFile.filename},` +
        ` ayant pour format ${this.songFile.type}, de taille ${this.songFile.size}Mo` + completeSentense;
}

module.exports = { SongFile, SongFileDecorator };