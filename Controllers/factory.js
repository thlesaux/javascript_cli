// Méthodes de Factory

const photoFile = function (params) {
    const { filename, size, type, pixelNumber } = params;
    this.filename = filename;
    this.type = type;
    this.size = size;
    this.pixelNumber = pixelNumber;
}
const videoFile = function (params) {
    const { filename, size, type, hd } = params;
    this.filename = filename;
    this.type = type;
    this.size = size;
    this.hd = hd;
}
const songFile = function (params) {
    const { filename, size, type, converted } = params;
    this.filename = filename;
    this.type = type;
    this.size = size;
    this.converted = converted;
}
const textFile = function (params) {
    const { filename, size, type, encrypted } = params;
    this.filename = filename;
    this.type = type;
    this.size = size;
    this.encrypted = encrypted;
}

// Factory
const fileFactory = function () { };


// Prototype
fileFactory.prototype.createFile = function (type, params = {}) {
    switch (type) {
        case 'jpg':
        case 'png':
            this.file = photoFile;
            break;
        case 'mp4':
        case 'avi':
            this.file = videoFile;
            break;
        case 'mp3':
            this.file = songFile;
            break;
        case 'pdf':
        case 'docx':
            this.file = textFile;
            break;
        default:
            break;
    }
    return new this.file(params);
};

var files = [];
const myFiles = new fileFactory();

files.push(myFiles.createFile('jpg', { filename: 'surf_at_lacanau.jpg', size: 1024, type: 'jpg', pixelNumber: 1000, }));
files.push(myFiles.createFile('docx', { filename: 'documentation_react.docx', size: 2024, type: 'docx', encrypted: true, }));
files.push(myFiles.createFile('mp3', { filename: 'love_yourself.mp3', size: 6024, type: 'mp3', converted: true, }));
files.push(myFiles.createFile('avi', { filename: 'got.avi', size: 10024, type: 'avi', hd: true, }));
files.push(myFiles.createFile('jpg', { filename: 'party_at_cancun.jpg', size: 1424, type: 'jpg', pixelNumber: 3000, }));
files.push(myFiles.createFile('pdf', { filename: 'my_best_book.pdf', size: 3024, type: 'pdf', encrypted: false }));
files.push(myFiles.createFile('mp3', { filename: 'my_song.mp3', size: 8024, type: 'mp3', converted: false, }));
files.push(myFiles.createFile('mp4', { filename: 'breaking_bad.mp4', size: 8024, type: 'mp4', hd: false, }));
files.push(myFiles.createFile('png', { filename: 'family.png', size: 2024, type: 'png', pixelNumber: 2000, }));
files.push(myFiles.createFile('docx', { filename: 'documentation_react.docx', size: 2024, type: 'docx', encrypted: true, }));
files.push(myFiles.createFile('mp3', { filename: 'band.mp3', size: 2024, type: 'mp3', converted: true, }));
files.push(myFiles.createFile('mp4', { filename: 'youtube.mp4', size: 12024, type: 'mp4', hd: true, }));

console.log('----------------------------------');

// Librairie Node.js qui permet de lire et intérpréter l'entrée du CLI
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
var i = 0;

// Observer ?
process.stdin.on('keypress', (str, key) => {
    // key est la clef correspondante de la touche du clavier, key.name son appélation
    if (key.ctrl && key.name === 'c') {
        // CTRL + C --> Stop l'exécution du programme
        process.exit();
    } else {
        switch (key.name) {
            // Flèche directionnelle de droite
            case 'right':
                if (i >= files.length) {
                    i = files.length;
                    console.log('Ceci est le dernier élément de la liste, vous ne pouvez pas aller plus loin');
                }
                else {
                    console.log(files[i]);
                    i++;
                }
                break;
            // Flèche directionnelle de gauche
            case 'left':
                if (i <= 0) {
                    i = 0;
                    console.log('Ceci est le premier élément de la liste, vous ne pouvez remonter');
                }
                else {
                    i--;
                    console.log(files[i]);
                }
                break;

            default:
                break;
        }

        // Pour débuger -- console.log(key);
    }
});

console.log();
console.log('Appuyez sur une flèche directionnelle pour voir un élément ...');
console.log();