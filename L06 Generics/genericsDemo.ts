/**
 * Created by dongsj on 16/8/2.
 */
// function Hello(num:number):number {
//     return num;
// }
// function Hello(str:any):any{
//     return
// }
function hello<T>(arg:T):T {
    return arg;
}
console.log(hello<string>('test'));
console.log(hello<number>(123));
console.log('-----------------------------------');

// function hello1<K>(num:K):K{
//     console.log(num.length);
//     return num;
// }

function hello2<T>(num:T[]):T[] {
    // console.log(num.length);
    return num;
}
var list:Array<string> = hello2<string>(['1', '2', '3']);
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
console.log('-----------------------------------');
function hello3<T>(arg:T):T {
    return arg;
}
var myHello:<K>(arg:K)=>K = hello3;
console.log(myHello('hello'));
console.log('-----------------------------------');
var hello4:{<T>(arg:T):T} = hello3;
console.log(myHello('hello~'));
console.log('-----------------------------------');
interface hello5 {
    <T>(arg:T):T;
}
function myHello5<T>(arg:T):T {
    return arg;
}
var mh:hello5 = myHello5;
console.log(mh<string>('test~'));
console.log('-----------------------------------');
interface Hello6<T> {
    (arg:T):T;
}
function myHello6<T>(arg:T):T {
    return arg;
}
var mh6:Hello6<number> = myHello6;
console.log(mh6(123));
console.log('-----------------------------------');
class helloNumber<T>{
    zero:T;
    add:(x:T,y:T)=>T;
}
var myHelloNumber=new helloNumber<number>();
myHelloNumber.zero=0;
myHelloNumber.add=function(x,y){
    return x+y;
};
console.log(myHelloNumber.zero);
console.log(myHelloNumber.add(1,2));
