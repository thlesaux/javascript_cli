const File = require("./File");

const TextFile = function (filename, size, type, encrypted) {
    File.call(this, filename, size, type);
    this.encrypted = encrypted;
};

// Classe décorée
const TextFileDecorator = function (textFile) {
    TextFile.call(this);
    this.textFile = textFile;
};

TextFileDecorator.prototype = Object.create(TextFile.prototype);

TextFileDecorator.prototype.toDisplay = function () {
    let completeSentense = this.textFile.encrypted ? ' qui est hd.' : ' qui n\'est pas hd.';

    return `Ceci est un fichier qui se nomme ${this.textFile.filename},` +
        ` ayant pour format ${this.textFile.type}, de taille ${this.textFile.size}Mo` + completeSentense;
}


module.exports = {TextFile, TextFileDecorator};