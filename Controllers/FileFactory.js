const File = require("../Models/File");
const PhotoFile = require("../Models/PhotoFile");
const VideoFile = require("../Models/VideoFile");
const SongFile = require("../Models/SongFile");
const TextFile = require("../Models/TextFile");

const FileFactory = function () { };

FileFactory.prototype.numericFileClass = PhotoFile;

FileFactory.prototype.createFile = function (name, filename, size, type, particularity) {

    if (!this.numericFileClass) throw 'given file is undefined';

    switch (name) {
        case PhotoFile.name:
            this.numericFileClass = PhotoFile;
            break;
        case VideoFile.name:
            this.numericFileClass = VideoFile;
            break;
        case SongFile.name:
            this.numericFileClass = SongFile;
            break;
        case TextFile.name:
            this.numericFileClass = TextFile;
            break;
        default:
            break;
    }

    //Héritage
    this.numericFileClass.prototype = Object.create(File.prototype);
    this.numericFileClass.prototype.constructor = this.numericFileClass;

    return new this.numericFileClass(filename, size, type, particularity);
};

//TODO : On va peut être utiliser le dp Singleton sur la Factory ???
const myFileFactory = new FileFactory();
const filesCollection = [];

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

module.exports = filesCollection;