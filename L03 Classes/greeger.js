/**
 * Created by dongsj on 16/8/1.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello , ' + this.greeting;
    };
    return Greeter;
}());
var green;
green = new Greeter('dongsj');
console.log(green.greet());
//# sourceMappingURL=greeger.js.map