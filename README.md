
# Typer.js
<p align="center">
  <a href="https://typer.tiangolo.com"><img src="https://typer.tiangolo.com/img/logo-margin/logo-margin-vector.svg" alt="Typer"></a>
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

Typer is a library that the power of variable types right in your javascript without ant cost to performance, it's designed to fast and valuable during development.

The key features are:

* **Intuitive to write**: Less time debugging. Designed to be easy to use and learn..
* **Easy to use**: It's easy to use for the beginners.
* **Short**: Multiple features from each parameter declaration. Find pontential bugs.
* **Start simple**: The simplest example adds only 2 lines of code to your app: **1 import, 1 function call**..

# Typer.js

## size 

| Size               | Typer.js    |
| ------------------ | ----------- |
| Unminified         | **2 KB** |
| Minified           | **0.8 KB**   |
| Minified & Gzipped | **0.06 KB**    |

## support features

| Features                 | uiedbook |
| ------------------------ | -------  |
| Supports Older Browsers  | ✔        |
| Supports Modern Browsers | ✔        |
| Actively Maintained      | ✔        |
| Namespaced Events        | ✔        |
| first class node support | ✔        |

## installing to your project

you can get uiedbook from [CloudFlare](https://cdnjs.cloudflare.com/ajax/libs/uiedbook/1.0.56/uiedbook.min.js) or [jsDelivr](https://cdn.jsdelivr.net/npm/uiedbook@1.0.56/uiedbook.min.js) and use it like this:

```html
<script src="https://cdn.jsdelivr.net/npm/uiedbook@1.0.56/uiedbook.min.js" type="module"></script>
<script>
  u("#container").style({
    color: "aqua",
    backgroundColor: "#ff9800"
  });
</script>
```

uiedbook can be downloaded manually from [npm](http://npmjs.com) as the [`uiedbook`](https://www.npmjs.com/package/uiedbook) package:

```sh
npm install --save uiedbook

or

npm i uiedbook
```

That you can then use like this:

```js
import u from "uiedbook";

 u(document.body).appendTo("div",
 {
   id: "new-div"
  }, 5);
  // 5 is the number created
```

# uiedbook Documentation

Uiedbook JavaScript library 1.0.57 documentation



## Contributing Typer.js

If you found a problem, or have a feature request, please open an [issue](https://github.com/FridayCandour/Typer.js/issues) about it.

If you want to make a pull request you should:

1. Clone the repository: `git clone https://github.com/FridayCandour/uiedbook.git`.
2. Enter the cloned repository: `cd uiedbook`
3. Remember to update the readme, if necessary.

Uiedbook.js has been given birth to in order for Developers to quickly create, maintain and publish Their products in less time.

## Thanks

- **[@suppen](https://github.com/suppen), [@trgwii](https://github.com/trgwii)** and all the contributors who helped making Uiedbook.
- **[Sauce Labs](https://saucelabs.com)** - The cross-browser testing platform we use for testing our builds in all the supported environments.

## License

MIT © Friday Candour
