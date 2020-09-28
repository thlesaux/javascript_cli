const File = require("../Models/File");
const PhotoFile = require("../Models/PhotoFile");
const VideoFile = require("../Models/VideoFile");
const SongFile = require("../Models/SongFile");
const TextFile = require("../Models/TextFile");

const NumericFileFactory = function () {};

NumericFileFactory.prototype.numericFileClass = PhotoFile;

NumericFileFactory.prototype.createFile = function (name, filename, size, type, attr_4) {

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
    }

    //Héritage
    this.numericFileClass.prototype = Object.create(File.prototype);
    this.numericFileClass.prototype.constructor = this.numericFileClass;

    return new this.numericFileClass(filename, size, type, attr_4);
};

const myNumericProductFactory = new NumericFileFactory();

const photo = myNumericProductFactory.createFile('PhotoFile', 'test.jpg', 1024, 'jpg', 1000);
photo.setCreatedAt('28/09/2020');
photo.setSeen(false);
console.log(photo);