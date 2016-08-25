var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by dongsj on 16/8/1.
 */
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log('name:' + this.name);
        console.log('age:' + this.age);
    };
    Person.prototype.tell = function () {
        return this.name + ':' + this.age;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        // this.name = name;
        // this.age = age;
        _super.call(this, name, age);
        this.school = school;
    }
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log('school:' + this.school);
    };
    Student.prototype.tell = function () {
        return this.name + ":" + this.age + ":" + this.school;
    };
    return Student;
}(Person));
// var p = new Person('dongsj', 27);
// p.print();
var s = new Student('dongsj', 27, 'buu');
s.print();
//# sourceMappingURL=classes.js.map