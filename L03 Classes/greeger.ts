/**
 * Created by dongsj on 16/8/1.
 */
class Greeter {
    greeting:string;

    constructor(message:string) {
        this.greeting = message;
    }

    greet() {
        return 'hello , ' + this.greeting;
    }
}
var green:Greeter;
green = new Greeter('dongsj');
console.log(green.greet());