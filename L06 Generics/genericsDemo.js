/**
 * Created by dongsj on 16/8/2.
 */
// function Hello(num:number):number {
//     return num;
// }
// function Hello(str:any):any{
//     return
// }
function hello(arg) {
    return arg;
}
console.log(hello('test'));
console.log(hello(123));
console.log('-----------------------------------');
// function hello1<K>(num:K):K{
//     console.log(num.length);
//     return num;
// }
function hello2(num) {
    // console.log(num.length);
    return num;
}
var list = hello2(['1', '2', '3']);
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
console.log('-----------------------------------');
function hello3(arg) {
    return arg;
}
var myHello = hello3;
console.log(myHello('hello'));
console.log('-----------------------------------');
var hello4 = hello3;
console.log(myHello('hello~'));
console.log('-----------------------------------');
function myHello5(arg) {
    return arg;
}
var mh = myHello5;
console.log(mh('test~'));
console.log('-----------------------------------');
function myHello6(arg) {
    return arg;
}
var mh6 = myHello6;
console.log(mh6(123));
console.log('-----------------------------------');
var helloNumber = (function () {
    function helloNumber() {
    }
    return helloNumber;
}());
var myHelloNumber = new helloNumber();
myHelloNumber.zero = 0;
myHelloNumber.add = function (x, y) {
    return x + y;
};
console.log(myHelloNumber.zero);
console.log(myHelloNumber.add(1, 2));
//# sourceMappingURL=genericsDemo.js.map