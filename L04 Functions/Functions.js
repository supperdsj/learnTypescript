/**
 * Created by dongsj on 16/8/2.
 */
// function add(x, y) {
//     return x + y;
// }
// var myAdd = function (x, y) {
//     return x + y;
// };
function add(x, y) {
    return x + y;
}
var myadd = function (x, y) {
    return 'hello ts';
};
var myAddts = function (n, a) {
    return a;
};
//?为可选参数
function buildName(firstName, lastName) {
    return firstName + ' ' + (lastName || '');
}
console.log(buildName('dongsj', 'hey hey'));
console.log(buildName('dongsj'));
// console.log(buildName('dongsj','hey','hey'));
function buildNameDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = 'dongsj'; }
    return firstName + ' ' + lastName;
}
console.log(buildNameDefault('hello'));
console.log(buildNameDefault('hello', 'dsj'));
console.log('--------------------------');
function peopleName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var pn = peopleName('dongsj', 'a', 'b', 'c');
console.log(pn);
var people = {
    name: ['dongsj', 'a', 'b', 'c'],
    getName: function () {
        var _this = this;
        //Lambads会创建_this=this,类似于匿名函数
        return function () {
            var i = Math.floor(Math.random() * _this.name.length);
            return {
                n: _this.name[i]
            };
        };
    }
};
var myName = people.getName();
console.log(myName().n);
console.log('---------------------------');
function attr(nameOrAge) {
    if (typeof nameOrAge === 'string') {
        console.log('name : ' + nameOrAge);
    }
    else {
        console.log('age : ' + nameOrAge);
    }
}
attr('dongsj');
attr(27);
//# sourceMappingURL=Functions.js.map