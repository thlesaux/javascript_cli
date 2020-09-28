const File = function (filename, size, type, createdAt, seen) {
    this.filename = filename;
    this.size = size;
    this.type = type;
    this.createdAt = createdAt;
    this.seen = seen;
};

export { File };