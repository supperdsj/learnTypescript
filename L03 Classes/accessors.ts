/**
 * Created by dongsj on 16/8/1.
 */
class Hello {
    private _name:string;
    get name():string {
        return this._name;
    }

    set name(newName:string) {
        this._name = newName;
    }

    tell() {
        return this._name;
    }
}
var h = new Hello();
h.name = 'dongsj';
console.log(h.tell());
