/**
 * Created by dongsj on 16/8/3.
 */
// interface StringValidator {
//     isAcceptable(s:string):boolean;
// }
// var lettersRegexp = /^[A-Za-z]+$/;
// var numberRegexp = /^[0-9]+$/;
// class LetterOnluValidator implements StringValidator {
//     isAcceptable(s:string):boolean {
//         return lettersRegexp.test(s);
//     }
// }
// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s:string):boolean {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LetterOnluValidator = (function () {
        function LetterOnluValidator() {
        }
        LetterOnluValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LetterOnluValidator;
    }());
    Validation.LetterOnluValidator = LetterOnluValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=Module.js.map