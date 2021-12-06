
# Typer.js nringing typing to javascript!
<p align="center">
  <a href="https://typer.uiedbook.com"><img src="https://typer.tiangolo.com/img/logo-margin/logo-margin-vector.svg" alt="Typer"></a>
</p>
<p align="center">
    <em>Typer, bringing types to vanilla javascript. Easy to code. easy type hints.</em>
</p>
<p align="center">
<a href="https://github.com/tiangolo/typer/actions?query=workflow%3ATest" target="_blank">
    <img src="https://github.com/tiangolo/typer/workflows/Test/badge.svg" alt="Test">
</a>
<a href="https://github.com/tiangolo/typer/actions?query=workflow%3APublish" target="_blank">
    <img src="https://github.com/tiangolo/typer/workflows/Publish/badge.svg" alt="Publish">
</a>
<a href="https://codecov.io/gh/tiangolo/typer" target="_blank">
    <img src="https://img.shields.io/codecov/c/github/tiangolo/typer?color=%2334D058" alt="Coverage">
</a>
</p>

---

Typer is a tiny user-defined typing library, it gives you the power of typing variables right in your javascript without ant cost to performance, it's designed to fast and valuable during development.

The key features are:

* **Intuitive to write**: Less time debugging. Designed to be easy to use and give you full control at the same time..
* **Easy to use**: It's easy to use for the beginners, with little or no configuration.
* **Short**: Multiple features from each parameter declaration. Find pontential bugs in real time.
* **Start simple**: The simplest example adds only 1 lines of code to your app: **1 import, you 're good**..

# Typer.js

## size 

| Size               | Typer.js    |
| ------------------ | ----------- |
| Unminified         | **2 KB** |
| Minified           | **0.8 KB**   |
| Minified & Gzipped | **0.06 KB**    |

## support features

| Features                 | Typer.js |
| ------------------------ | -------  |
| Supports Older Browsers  | ✔        |
| Supports Modern Browsers | ✔        |
| Actively Maintained      | ✔        |
| Namespaced Events        | ✔        |
| first class node support | ✔        |

## installing to your project

you can get Typer.js by cloning this repo/

or use it right from a fast cdn via [Typer](https://cdn.jsdelivr.net/gh/fridaycandour/Typer.js/typer.js):

Typer.js can also be downloaded manually from [npm](http://npmjs.com) as the [`Typer.js`](https://www.npmjs.com/package/Typer.js) package:

```sh
npm install --save Typer.js

npm i Typer.js
```

## Using Typer.js:

```js
// importing Typer.js

import t from "./Typer/typer.js"; // the location you saved it

const a = t("string", "line 1")("typer");
```

# Typer.js Documentation

Typer.js JavaScript library 1.0.0 documentation


## configuring Typer,js 

A: you can choose to allow Typer.js run through and complete all the evaluate all of them before warning you 
B: or you can decide to get an error message for the first evaluation encoutered. just one code you're done.

the default is B, and you can switch to a by setting:

```js
// import it if you are using it as a module

typer.config( true ) // sets sequential to true

```
# the t(type, label)(value) typer.

this typer takes a type as a first argument examples are number, string, object, function 
 or the supposed value you are typing against supposedly.

 it takes a label for line indentification, you just give the number or use a custom string
  if you want, it's that easy, typer uses it to remind you where you did something funny. :)

  yup the last paramental in the last bracket is the actual value you want to save to the
   variable you created typer will do the saving when it's speedily done checling the types

```js
// The t syntax
// t(type, label)(value);
// the label is the line number of the code, or a string value you want to use instead.

// this is a string type
const a = t("string", 99)("typer");
// the above code is on line no 99

// this is a number type
const b = t("number", "customised label")(5);

// this a union type, meaning it can hold both string and nuber in this case
const c = t("string",  "number", "third check spot")("typer is 5 letters");

console.log(a + " | ",b + " | ",c + " | ");

const d = t("number", "where i had my last bug")(5);


// defining an interface
// use an array of types if you want union type here

const type = {
	pin: "number",
	password: "string",
    name: "friday candour",
    serial: +2348166948755,
    union: ["number", "string", "friday", 1862, {lib: "Typer.js"}]
}
    
    // an example of a complex interface with union type, and typer is still super fast :)
    // coded from mars

function check(egg) {
	console.log(egg);
}
check(type)

// no errors! or warnings, yup! change somethings, try your code, it's time to get wierd :)
```


# The lit typer.

lit is used for checking deep into objects and arrays which is a limitation to the t() typer,
 yep it's the same syntax.

it's a way of doing an interface

 lit(type, label)(value) yep (:

```js

const foo = {
	dd: 1
}
const bar = {
	kk: 2,
	dd: 1,
}

const numbers = [1, 2, 3];

// for objects
lit(bar, 64)(foo)

// for arrays
lit(numbers, 65)([2, 3, 4, 5, 1])

```
see for yourself and ask why it works, of course something needs to be cleared on they work in hamony :)


the label is the line number of the code, or a string value you want to use instead.


## Contributing Typer.js

If you found a problem, or have a feature request, please open an [issue](https://github.com/FridayCandour/Typer.js/issues) about it.

If you want to make a pull request you should:

1. Clone the repository: `git clone https://github.com/FridayCandour/Typer.js.git`.
2. Enter the cloned repository: `cd Typer.js`
3. Remember to update the readme, if necessary.

Uiedbook.js has been given birth to in order for Developers to quickly create, maintain and publish Their products in less time.

## Thanks

- **[@suppen](https://github.com/suppen), [@trgwii](https://github.com/trgwii)** and all the contributors who helped making Uiedbook.
  these fellow made life worth living
## License

MIT © Friday Candour
