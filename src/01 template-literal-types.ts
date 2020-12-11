"use strict";

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

const log = console.log;

function setVerticalAlignment(color: "top" | "middle" | "bottom") {
  log(`color =`, color);
  // ...
}

setVerticalAlignment(`top`);
// setVerticalAlignment(`left`);
// Argument of type '"left"' is not assignable to parameter of type '"top" | "middle" | "bottom"'.ts(2345)


type NewOptions = {
  [K in "noImplicitAny" | "strictNullChecks" | "strictFunctionTypes"]?: boolean;
};

// same as
type Options = {
  noImplicitAny?: boolean,
  strictNullChecks?: boolean,
  strictFunctionTypes?: boolean
};

type World = "world";
type Greeting = `hello ${World}`;
// type Greeting = "hello world"

type Color = "red" | "blue";
type Quantity = "one" | "two";

type SeussFish = `${Quantity | Color} fish`;
// type SeussFish = "one fish" | "two fish" | "red fish" | "blue fish"

type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"

declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

setAlignment("top-left");
// setAlignment("top-middle");
// Argument of type '"top-middle"' is not assignable to parameter of type '"top-left" | "top-center" | "top-right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right"'.

type PropEventSource<T> = {
  on(eventName: `${string & keyof T}Changed`, callback: () => void): void;
};

/// Create a "watched object" with an 'on' method, so that you can watch for changes to properties.
declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

let person = makeWatchedObject({
  firstName: "xgqfrms",
  age: 18,
  location: "shanghai",
});

person.on("firstNameChanged", () => {
  console.log(`firstName was changed!`);
});

// person.on("firstName", () => {});
// Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "ageChanged" | "locationChanged"'.

// person.on("frstNameChanged", () => {});
// Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "ageChanged" | "locationChanged"'.

type PropEventSource2<T> = {
  on<K extends string & keyof T> (eventName: `${K}Changed`, callback: (newValue: T[K]) => void ): void;
};

declare function makeWatchedObject2<T>(obj: T): T & PropEventSource2<T>;

let person2 = makeWatchedObject2({
  firstName: "xgqfrms",
  age: 18,
  location: "shanghai",
});

// works! 'newName' is typed as 'string'
person2.on("firstNameChanged", newName => {
  // 'newName' has the type of 'firstName'
  console.log(`new name is ${newName.toUpperCase()}`);
});

// works! 'newAge' is typed as 'number'
person2.on("ageChanged", newAge => {
  if (newAge < 0) {
      console.log("warning! negative age");
  }
})

type EnthusiasticGreetingUp<T extends string> = `${Uppercase<T>}`
type EnthusiasticGreetingLow<T extends string> = `${Lowercase<T>}`

type HELLO = EnthusiasticGreetingUp<"hello">;
type hello = EnthusiasticGreetingLow<"HELLO">;

let HOT: HELLO = `HELLO`;
let hot: hello = `hello`;

log(`HELLO =`, HOT)
log(`hello =`, hot)

export default setVerticalAlignment;

export {
  setVerticalAlignment,
  setAlignment,
  NewOptions,
  Options,
  Greeting,
  SeussFish,
  HELLO,
  hello,
};
