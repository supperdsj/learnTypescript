/**
 * Created by dongsj on 16/8/1.
 */
class People {
    private name:string;
    private age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    print() {
        return this.name + ":" + this.age;
    }
}

class Teacher extends People {
    public school:string;

    constructor(school:string) {
        super('dongsj', 27);
        this.school = school;
    }

    print() {
        return super.print() + ":" + this.school;
    }
}
var t = new Teacher('buu');
// t.name = 'dongsj';
// t.age = 27;
// t.school = 'buu';
console.log(t.print());