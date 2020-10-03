const File = require("./File");

// Décorateur ?

// Exemple -->
// const PhotoFile = function(file, pixelNumber) {
//     File.call(this) = file;
//     this.pixelNumber = pixelNumber;
// };

// Pour le décorateur, le principe c'est exactement ça, cependant, si on passe un file dans le constructeur, la factory ne va plus nous servir à rien, ça n'aura plus de sens (je pense après je peux me tromper)
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
// const PhotoFileWithToString = (photoFile) => {
//     this.toString = () => `Ceci est un fichier de type ${photoFile.type} ...`
// };
//
// On décore après l'initialisation de l'objet donc après la factory si l'on veut
// Imaginons un objet PhotoFile photo1;
//
// PhotoFileWithToString(photo1);
// console.log('petite description du sale', photo1.toString());

const PhotoFile = function (filename, size, type, pixelNumber) {
    File.call(this, filename, size, type);
    this.pixelNumber = pixelNumber;
};

module.exports = PhotoFile;