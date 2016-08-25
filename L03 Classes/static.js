/**
 * Created by dongsj on 16/8/1.
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        console.log('姓名' + Person.name);
    };
    return Person;
}());
var p = new Person();
Person.name = 'dongsj';
p.tell();
//# sourceMappingURL=static.js.map