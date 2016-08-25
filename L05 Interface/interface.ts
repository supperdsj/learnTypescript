/**
 * Created by dongsj on 16/8/2.
 */
// function printLabel(labelObj:{label:string}) {
//     console.log(labelObj.label);
// }
// var myObj = {lable: 'myLabel'};
// printLabel(myObj);
interface labelValue {
    label:string;
}
function printLabel(labelObj:labelValue) {
    console.log(labelObj.label);
}
var myObj = {label: 'hello'};
printLabel(myObj);
console.log('-------------------------------------------');
//可选interface
interface USB {
    name?:string;
    age:number;
}
function printUSB(usbObj:USB) {
    console.log(usbObj.name);
    console.log(usbObj.age);
}
var my = {name: 'dongsj', age: 27};
var my2 = {age: 30};
printUSB(my);
printUSB(my2);
console.log('-------------------------------------------');
//函数interface
interface SearchFunc {
    (source:string, subString:String):boolean;
}
var mySearch:SearchFunc;
mySearch = function (source:string, subString) {
    var result = source.search(subString);
    return result != -1;
};
console.log('-------------------------------------------');
//数组interface
interface StringArray {
    [index:number]:string;
}

var myArray:StringArray;
myArray = ['a', 'b', 'c'];
console.log(myArray[1]);
console.log('-------------------------------------------');
//类interface
interface ClockInterface {
    currentTime:Date;
    setTime(d:Date);
}
class Clock implements ClockInterface {
    currentTime:Date;

    setTime(d) {
        this.currentTime = d;
    }

    constructor(h:number, m:number, s:number) {

    }
}
console.log('-------------------------------------------');
//继承interface
interface Shape {
    color:string;
}
interface PenStroke {
    penWidth:number;
}
interface Square extends Shape,PenStroke {
    sideLength:number;
}
var s = <Square>{};
s.color = 'blue';
s.sideLength = 10;
s.penWidth = 20;

interface Counter {
    interval:number;
    reset():void;
    (start:number):string;
}
var c:Counter;
c(10);
c.reset();