// Design Pattern Observer

const FileObserver = function () {
    this.observers = []; // Observers
};

const observerHandler = function (elem) {
    console.log("Envoyé : " + elem);
};

FileObserver.prototype = {
    add: function (e) {
        this.observers.push(e);
    },
    remove: function (handler) {
        this.observers = this.observers.filter((h) => h !== handler);
    },
    count: function () {
        return this.observers.length;
    },
    fire: function (contextObj, msg) {
        const context = contextObj || window;
        this.observers.forEach((handler) => handler(context, msg));
    }
}

module.exports = { FileObserver, observerHandler };