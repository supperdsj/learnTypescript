/**
 * Created by dongsj on 16/8/1.
 */
class Person {
    static name:string;

    tell() {
        console.log('姓名' + Person.name);
    }
}
var p = new Person();
Person.name='dongsj';
p.tell();