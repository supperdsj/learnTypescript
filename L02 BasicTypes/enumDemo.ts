/**
 * Created by dongsj on 16/8/1.
 */
enum Color{Red=1,Green,Blue}
var colorName:string=Color[1];
function tell(){
    console.log(colorName);
    console.log(Color.Red);
}
tell();