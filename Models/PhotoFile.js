const File = require("./File");

// Décorateur ?

// Exemple -->
// const PhotoFile = function(file, pixelNumber) {
//     File.call(this) = file;
//     this.pixelNumber = pixelNumber;
// };

// (Thomas) Pour le décorateur, le principe c'est exactement ça, cependant, si on passe un file dans le constructeur,
// la factory ne va plus nous servir à rien, ça n'aura plus de sens (je pense après je peux me tromper)
// Il faudrait décorer les méthodes d'une classe à vrai dire du style
// Exemple -->
// Classe de base
//
// const PhotoFile = function (filename, size, type, pixelNumber) {
//     File.call(this, filename, size, type);
//     this.pixelNumber = pixelNumber;
// };
//
//Classe décorée

//
// On décore après l'initialisation de l'objet donc après la factory si l'on veut
// Imaginons un objet PhotoFile photo1;
//
// PhotoFileWithToString(photo1);
// console.log('petite description du sale', photo1.toString());

const PhotoFile = function (filename, size, type, pixelNumber) {
    File.call(this, filename, size, type);
    this.pixelNumber = pixelNumber;

    this.toString = () => { return 'blablabla' };
};

// Classe décorée

const PhotoFileWithToString = function (photoFile) {
    console.log('test');
    const currentToString = photoFile.toString();

    photoFile.toString = () => { return currentToString + `connard ${photoFile.type}` }
};

module.exports = { PhotoFile, PhotoFileWithToString };