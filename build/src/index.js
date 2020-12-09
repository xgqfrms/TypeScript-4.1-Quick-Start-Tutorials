"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TS4x4 = exports.TS4x3 = exports.TS4x2 = exports.TS4x1 = exports.TS4x = void 0;
/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-12-07
 * @modified
 *
 * @description TypeScript 4.x
 * @augments
 * @example
 * @link
 *
 */
var log = console.log;
// default
var TS4x = /** @class */ (function () {
    function TS4x(version, author) {
        this.version = version;
        this.author = author;
        this.init();
    }
    TS4x.prototype.init = function () {
        log("init");
    };
    return TS4x;
}());
exports.TS4x = TS4x;
// constructor public
var TS4x1 = /** @class */ (function () {
    function TS4x1(version, author) {
        this.version = version;
        this.author = author;
        // auto assignment 🚀, no needs manually assignment
        // this.version = version;
        // this.author = author;
        this.init();
    }
    TS4x1.prototype.init = function () {
        log("init");
    };
    return TS4x1;
}());
exports.TS4x1 = TS4x1;
// public
var TS4x2 = /** @class */ (function () {
    function TS4x2(version, author) {
        this.version = version;
        this.author = author;
        this.init();
    }
    TS4x2.prototype.init = function () {
        log("init");
    };
    return TS4x2;
}());
exports.TS4x2 = TS4x2;
// private
var TS4x3 = /** @class */ (function () {
    function TS4x3(version, author) {
        this.version = version;
        this.author = author;
        this.init();
    }
    TS4x3.prototype.init = function () {
        log("init", this.version);
        log("init", this.author);
    };
    return TS4x3;
}());
exports.TS4x3 = TS4x3;
// protected
var TS4x4 = /** @class */ (function () {
    function TS4x4(version, author) {
        this.version = version;
        this.author = author;
        this.init();
    }
    TS4x4.prototype.init = function () {
        log("init", this.version);
        log("init", this.author);
    };
    return TS4x4;
}());
exports.TS4x4 = TS4x4;
exports.default = TS4x;
//# sourceMappingURL=index.js.map