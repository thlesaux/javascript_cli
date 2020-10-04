const FileFactory = require("../Controllers/FileFactory");
const Observer = require("../Controllers/FileObserver");
const Photo = require("../Models/PhotoFile");
const Video = require("../Models/VideoFile");
const Song = require("../Models/SongFile");
const Text = require("../Models/TextFile");


const fileObserver = new Observer.FileObserver();

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

//Tâche asynchrone
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
                        FileFactory.filesCollection[index].setSeen(true);
                        index++;
                    }
                    fileObserver.add(Observer.observerHandler);
                    fileObserver.fire("Flèche de droite -->");
                    fileObserver.remove(Observer.observerHandler)
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
                    fileObserver.add(Observer.observerHandler);
                    fileObserver.fire(" <-- Flèche de gauche");
                    fileObserver.remove(Observer.observerHandler)
                    break;
                case 'e':
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
                    console.clear();
                    console.log('Il y a un total de ' + FileFactory.filesCollection.length + ' fichiers');
                    break;
                case 'i':
                    console.clear();
                    const currentObj = FileFactory.filesCollection[index];
                    switch (currentObj.constructor.name) {
                        case 'PhotoFile':
                            console.log(new Photo.PhotoFileDecorator(currentObj).toDisplay());
                            break;
                        case 'SongFile':
                            console.log(new Song.SongFileDecorator(currentObj).toDisplay());
                            break;
                        case 'VideoFile':
                            console.log(new Video.VideoFileDecorator(currentObj).toDisplay());
                            break;
                        case 'TextFile':
                            console.log(new Text.TextFileDecorator(currentObj).toDisplay());
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