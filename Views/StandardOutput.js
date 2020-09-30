const filesCollection = require("../Controllers/FileFactory");

// Librairie Node.js qui permet de lire et intérpréter l'entrée du CLI
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}

let index = 0;

// Observer ?
process.stdin.on('keypress', (str, key) => {
    // key est la clef correspondante de la touche du clavier, key.name étant son appélation
    if (key.ctrl && key.name === 'c') {
        // CTRL + C --> Stop l'exécution du programme
        process.exit();
    } else {
        switch (key.name) {
            // Flèche directionnelle de droite
            case 'right':
                if (index >= filesCollection.length) {
                    index = filesCollection.length;
                    console.clear();
                    console.log('Ceci est le dernier élément de la liste, vous ne pouvez pas aller plus loin');
                } else {
                    console.clear();
                    console.log(filesCollection[index]);
                    console.log();
                    //TODO : DP Observer pour le setSeen ?
                    // add() vers fileObserver pour mettre le seen à true
                    filesCollection[index].setSeen(true);
                    index++;
                }
                break;
            // Flèche directionnelle de gauche
            case 'left':
                if (index <= 0) {
                    index = 0;
                    console.clear();
                    console.log('Ceci est le premier élément de la liste, vous ne pouvez remonter');
                } else {
                    index--;
                    console.clear();
                    console.log(filesCollection[index]);
                }
                break;
            case 'e':
                //TODO : Méthode à mettre dans un décorator -> Model File
                // Je pense plus qu'il faut mettre une fonction get() qui récupère la liste des files vues
                // donc plutôt dans une méthode d'observer que dans un decorator. Ton avis ?
                let nbFileSeen = 0;
                filesCollection.forEach((item) => {
                    if (item['seen']) {
                        nbFileSeen++
                    }
                })
                console.clear();
                console.log('Vous avez vu ' + nbFileSeen + ' fichiers');
                break;
            case 'c':
                //TODO : Méthode à mettre dans un décorator -> Model File
                console.clear();
                console.log('Il y a un total de ' + filesCollection.length + ' fichiers');
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