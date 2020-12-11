"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    firstName: "Homer",
    age: 42,
    location: "Springfield",
});
person.on("firstNameChanged", function () {
    console.log("firstName was changed!");
});
exports.default = setVerticalAlignment;
//# sourceMappingURL=01%20template-literal-types.js.map