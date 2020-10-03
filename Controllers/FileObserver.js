const fileObserver = function () {
    this.observers = [];
};

fileObserver.prototype = {
    add: function (e) {
        this.observers.push(e);
    },
    get: function () {
        return this.observers.length;
    }
}

module.exports = fileObserver;