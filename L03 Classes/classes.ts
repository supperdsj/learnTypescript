/**
 * Created by dongsj on 16/8/1.
 */
class Person {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log('name:' + this.name);
        console.log('age:' + this.age);
    }

    tell() {
        return this.name + ':' + this.age;
    }
}
class Student extends Person {
    school:string;

    constructor(name:string, age:number, school:string) {
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.school = school;
    }

    print() {
        super.print();
        console.log('school:' + this.school);
    }

    tell() {
        return this.name + ":" + this.age + ":" + this.school;
    }
}
// var p = new Person('dongsj', 27);
// p.print();
var s = new Student('dongsj', 27, 'buu');
s.print();
