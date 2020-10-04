const File = require("./File");

const PhotoFile = function (filename, size, type, pixelNumber) {
    File.call(this, filename, size, type);
    this.pixelNumber = pixelNumber;
};

// Classe décorée
const PhotoFileDecorator = function (photoFile) {
    PhotoFile.call(this);
    this.photoFile = photoFile;

};

PhotoFileDecorator.prototype = Object.create(PhotoFile.prototype);
PhotoFileDecorator.prototype.toDisplay = function () {
    return `Ceci est un fichier qui se nomme ${this.photoFile.filename},` +
        ` ayant pour format ${this.photoFile.type}, de taille ${this.photoFile.size}Mo et un nombre de pixel égal à ${this.photoFile.pixelNumber}.`;
}

module.exports = {PhotoFile, PhotoFileDecorator};