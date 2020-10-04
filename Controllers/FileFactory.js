const File = require("../Models/File");
const Photo = require("../Models/PhotoFile");
const Video = require("../Models/VideoFile");
const Song = require("../Models/SongFile");
const Text = require("../Models/TextFile");

const SingletonFactory = (function () {

    let instance = null;

    const FileFactory = function () {
        const numericFileClass = Photo.PhotoFile;
        const getNumericFileClass = () => {
            return numericFileClass;
        }
        const createFile = function (name, filename, size, type, particularity) {

            this.numericFileClass = this.getNumericFileClass();

            if (!this.numericFileClass) throw 'given file is undefined';

            switch (name) {
                case Photo.PhotoFile.name:
                    this.numericFileClass = Photo.PhotoFile;
                    break;
                case Video.VideoFile.name:
                    this.numericFileClass = Video.VideoFile;
                    break;
                case Song.SongFile.name:
                    this.numericFileClass = Song.SongFile;
                    break;
                case Text.TextFile.name:
                    this.numericFileClass = Text.TextFile;
                    break;
                default:
                    break;
            }

            //Héritage
            this.numericFileClass.prototype = Object.create(File.prototype);
            this.numericFileClass.prototype.constructor = this.numericFileClass;

            return new this.numericFileClass(filename, size, type, particularity);
        };

        return {
            createFile,
            getNumericFileClass
        }
    };

    return {
        get: () => {
            if (!instance) {
                instance = FileFactory();
            }

            return instance;
        }
    }
})();

const myFileFactory = SingletonFactory.get();
const filesCollection = [];

const initialisation = () => {
    if (myFileFactory) {
        filesCollection.push(myFileFactory.createFile('PhotoFile', 'surf_at_lacanau.jpg', 1024, 'jpg', 1000));
        filesCollection.push(myFileFactory.createFile('TextFile', 'documentation_react.docx', 2024, 'docx', true));
        filesCollection.push(myFileFactory.createFile('SongFile', 'love_yourself.mp3', 6024, 'mp3', true));
        filesCollection.push(myFileFactory.createFile('VideoFile', 'got.avi', 10024, 'avi', true));
        filesCollection.push(myFileFactory.createFile('PhotoFile', 'party_at_cancun.jpg', 1424, 'jpg', 3000));
        filesCollection.push(myFileFactory.createFile('TextFile', 'my_best_book.pdf', 3024, 'pdf', false));
        filesCollection.push(myFileFactory.createFile('SongFile', 'my_song.mp3', 8024, 'mp3', false));
        filesCollection.push(myFileFactory.createFile('VideoFile', 'breaking_bad.mp4', 8024, 'mp4', false));
        filesCollection.push(myFileFactory.createFile('PhotoFile', 'family.png', 2024, 'png', 2000));
        filesCollection.push(myFileFactory.createFile('TextFile', 'documentation_react.docx', 2024, 'docx', true));
        filesCollection.push(myFileFactory.createFile('SongFile', 'band.mp3', 2024, 'mp3', true));
        filesCollection.push(myFileFactory.createFile('VideoFile', 'youtube.mp4', 12024, 'mp4', true));
    }
}

module.exports = {filesCollection, myFileFactory, initialisation};