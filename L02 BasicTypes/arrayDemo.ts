/**
 * Created by dongsj on 16/8/1.
 */
var list1:number[] = [1, 2, 3, 4, 5];
var list2:Array<string> = ['a','b','c','d','e'];
function tell() {
    for (var i:number = 0; i < list1.length; i++) {
        console.log(list1[i]);
    }
    for (var i:number = 0; i < list2.length; i++) {
        console.log(list2[i]);
    }
}
tell();