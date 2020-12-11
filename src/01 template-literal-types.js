"use strict";
exports.__esModule = true;
exports.setAlignment = exports.setVerticalAlignment = void 0;
/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-12-10
 * @modified
 *
 * @description Template Literal Types / 模板文字类型
 * @augments
 * @example
 * @link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
var log = console.log;
function setVerticalAlignment(color) {
    log("color =", color);
    // ...
}
exports.setVerticalAlignment = setVerticalAlignment;
setVerticalAlignment("top");
setAlignment("top-left");
var person = makeWatchedObject({
    firstName: "xgqfrms",
    age: 18,
    location: "shanghai"
});
person.on("firstNameChanged", function () {
    console.log("firstName was changed!");
});
var person2 = makeWatchedObject2({
    firstName: "xgqfrms",
    age: 18,
    location: "shanghai"
});
// works! 'newName' is typed as 'string'
person2.on("firstNameChanged", function (newName) {
    // 'newName' has the type of 'firstName'
    console.log("new name is " + newName.toUpperCase());
});
// works! 'newAge' is typed as 'number'
person2.on("ageChanged", function (newAge) {
    if (newAge < 0) {
        console.log("warning! negative age");
    }
});
var HOT = "HELLO";
var hot = "hello";
log("HELLO =", HOT);
log("hello =", hot);
exports["default"] = setVerticalAlignment;
