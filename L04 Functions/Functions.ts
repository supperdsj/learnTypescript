/**
 * Created by dongsj on 16/8/2.
 */
// function add(x, y) {
//     return x + y;
// }
// var myAdd = function (x, y) {
//     return x + y;
// };

function add(x:number, y:number):number {
    return x + y;
}
var myadd = function (x:number, y:string):string {
    return 'hello ts';
};
var myAddts:(name:string, age:number)=>number = function (n:string, a:number) {
    return a;
};
//?为可选参数
function buildName(firstName:string, lastName?:string) {
    return firstName + ' ' + (lastName || '');
}
console.log(buildName('dongsj', 'hey hey'));
console.log(buildName('dongsj'));
// console.log(buildName('dongsj','hey','hey'));

function buildNameDefault(firstName:string, lastName:string = 'dongsj') {
    return firstName + ' ' + lastName;
}
console.log(buildNameDefault('hello'));
console.log(buildNameDefault('hello', 'dsj'));
console.log('--------------------------');
function peopleName(firstName:string, ...restOfName:string[]) {
    return firstName + ' ' + restOfName.join(' ');
}
var pn = peopleName('dongsj', 'a', 'b', 'c');
console.log(pn);
var people = {
    name: ['dongsj', 'a', 'b', 'c'],
    getName: function () {
        //Lambads会创建_this=this,类似于匿名函数
        return ()=> {
            var i = Math.floor(Math.random() * this.name.length);
            return {
                n: this.name[i]
            }
        }
    }
};
var myName = people.getName();
console.log(myName().n);
console.log('---------------------------');
function attr(name:string):string;
function attr(age:number):number;
function attr(nameOrAge:any):any{
    if(typeof nameOrAge==='string'){
        console.log('name : '+nameOrAge);
    }else{
        console.log('age : '+nameOrAge);
    }
}
attr('dongsj');
attr(27);

