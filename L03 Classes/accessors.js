/**
 * Created by dongsj on 16/8/1.
 */
var Hello = (function () {
    function Hello() {
    }
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            // this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Hello.prototype.tell = function () {
        return this._name;
    };
    return Hello;
}());
var h = new Hello();
h.name = 'dongsj';
console.log(h.tell());
//# sourceMappingURL=accessors.js.map
$scope.prt