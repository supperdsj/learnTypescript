function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: 'hello' };
printLabel(myObj);
console.log('-------------------------------------------');
function printUSB(usbObj) {
    console.log(usbObj.name);
    console.log(usbObj.age);
}
var my = { name: 'dongsj', age: 27 };
var my2 = { age: 30 };
printUSB(my);
printUSB(my2);
console.log('-------------------------------------------');
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result != -1;
};
console.log('-------------------------------------------');
var myArray;
myArray = ['a', 'b', 'c'];
console.log(myArray[1]);
console.log('-------------------------------------------');
var Clock = (function () {
    function Clock(h, m, s) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
console.log('-------------------------------------------');
var s = {};
s.color = 'blue';
s.sideLength = 10;
s.penWidth = 20;
var c;
c(10);
c.reset();
//# sourceMappingURL=interface.js.map