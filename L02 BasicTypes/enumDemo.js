/**
 * Created by dongsj on 16/8/1.
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[1];
function tell() {
    console.log(colorName);
    console.log(Color.Red);
}
tell();
//# sourceMappingURL=enumDemo.js.map