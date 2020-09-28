const File = function (filename, size, type) {
    this.filename = filename;
    this.size = size;
    this.type = type;
    this.createdAt = null;
    this.seen = null;
};

File.prototype.setCreatedAt = function (createdAt) {
    this.createdAt = createdAt;
}

File.prototype.setSeen = function (seen) {
    this.seen = seen;
}

module.exports = File;