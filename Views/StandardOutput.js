const FileFactory = require("../Controllers/FileFactory");
const fileObserver = require("../Controllers/FileObserver");
const PhotoFile = require("../Models/PhotoFile");

// Promise pour une tâche asynchrone
function addFilesAfter30Sec() {
    return new Promise(resolve => {
        setTimeout(() => {
            if (FileFactory.myFileFactory) {
                FileFactory.filesCollection.push(FileFactory.myFileFactory.createFile('PhotoFile', 'last_ski_session.jpg', 4424, 'jpg', 4000));
                FileFactory.filesCollection.push(FileFactory.myFileFactory.createFile('SongFile', 'dems.mp3', 7024, 'mp3', false));
            }
            resolve();
        }, 30000);
    });
}

//Async Task
async function asyncCall() {
    await addFilesAfter30Sec();
}

const loadReadLine = function () {

    FileFactory.initialisation();

    // Librairie Node.js qui permet de lire et intérpréter l'entrée du CLI
    const readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
        asyncCall().then(() => {
            console.clear();
            console.log('Des fichiers viennent d\'être ajoutés !');
        });
        process.stdin.setRawMode(true);
    }
}

const loadCli = function () {

    console.clear();
    loadReadLine();

    let index = 0;

    process.stdin.on('keypress', (str, key) => {
        // key est la clef correspondante de la touche du clavier, key.name étant son appélation
        if (key.ctrl && key.name === 'c') {
            // CTRL + C --> Stop l'exécution du programme
            process.exit();
        } else {
            switch (key.name) {
                // Flèche directionnelle de droite
                case 'right':
                    if (index >= FileFactory.filesCollection.length) {
                        index = FileFactory.filesCollection.length;
                        console.clear();
                        console.log('Ceci est le dernier élément de la liste, vous ne pouvez pas aller plus loin ..!');
                    } else {
                        console.clear();
                        console.log(FileFactory.filesCollection[index]);
                        console.log();
                        //TODO : DP Observer pour le setSeen ?
                        // add() vers fileObserver pour mettre le seen à true
                        FileFactory.filesCollection[index].setSeen(true);
                        index++;
                    }
                    break;
                // Flèche directionnelle de gauche
                case 'left':
                    if (index <= 0) {
                        index = 0;
                        console.clear();
                        console.log('Ceci est le premier élément de la liste, vous ne pouvez remonter ..!');
                    } else {
                        index--;
                        console.clear();
                        console.log(FileFactory.filesCollection[index]);
                        console.log()
                    }
                    break;
                case 'e':
                    //TODO : Je pense plus qu'il faut mettre une fonction get() qui récupère la liste des files vues dans une méthode d'observer -> (Thomas) Oui je suis OK bg
                    let nbFileSeen = 0;
                    FileFactory.filesCollection.forEach((item) => {
                        if (item['seen']) {
                            nbFileSeen++
                        }
                    })
                    console.clear();
                    console.log('Vous avez vu ' + nbFileSeen + ' fichiers');
                    break;
                case 'c':
                    //TODO : Méthode à mettre dans un décorator -> Voir exemple dans le PhotoFile (Thomas)
                    console.clear();
                    console.log('Il y a un total de ' + FileFactory.filesCollection.length + ' fichiers');
                    break;
                case 'i':
                    console.clear();
                    var obj = FileFactory.filesCollection[index];
                    switch (obj.constructor.name) {
                        case 'PhotoFile':
                            console.log(PhotoFile.PhotoFileWithToString(obj));
                            break;
                    
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
    });

    console.log();
    console.log('Appuyez sur une flèche directionnelle pour voir un élément ...');
    console.log();
}

const startCli = function () {
    loadCli();
}

module.exports = { startCli };