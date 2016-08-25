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

module Validation {
    export interface StringValidator {
        isAcceptable(s:string):boolean;
    }
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    export class LetterOnluValidator implements StringValidator {
        isAcceptable(s:string):boolean {
            return lettersRegexp.test(s);
        }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s:string):boolean {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}