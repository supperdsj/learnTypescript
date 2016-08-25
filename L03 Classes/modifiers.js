var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by dongsj on 16/8/1.
 */
var People = (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return People;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(school) {
        _super.call(this, 'dongsj', 27);
        this.school = school;
    }
    Teacher.prototype.print = function () {
        return _super.prototype.print.call(this) + ":" + this.school;
    };
    return Teacher;
}(People));
var t = new Teacher('buu');
// t.name = 'dongsj';
// t.age = 27;
// t.school = 'buu';
console.log(t.print());
//# sourceMappingURL=modifiers.js.map