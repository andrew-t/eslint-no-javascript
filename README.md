# eslint-no-javascript

I recently found an eslint rule called [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus). It's based on the logic that this code—

```js
i
++
j
```

—increments `j` instead of `i`, which is confusing, so what we're going to do is ban the `++` operator. This logic is completely sound and reasonable, as are all the other eminently sensible rules that eslint enforces by default. If I have one criticism of them, it is that they do not go far enough. And to that end, I have created [eslint-no-javascript](https://www.npmjs.com/package/eslint-no-javascript), which enforces that developers must not use JavaScript. Any non-whitespace code in your source will be rejected, and if you use the `--fix` option it will be removed.

JavaScript is the cause of most accessibility, usability, performance and security issues in modern webapps and its use is discouraged by all reputable experts. This plugin can remove this problem from all of your projects.

## Examples of valid code

```js

```
✅

```js



```
✅

## Examples of invalid code

```js
const x = 4;
```
❌ Unexpected JavaScript

```js
console.log("example")
```
❌ Unexpected JavaScript

```js
function test() {
    let y = 2;
    return y;
}

test();
```
❌ Unexpected JavaScript

## Usage

Install the package, and `eslint` itself:

```bash
npm install eslint eslint-no-javascript
```

You will not need any other `eslint` plugins, since all code they reject would be rejected by `eslint-no-javascript`, or indeed any other dependencies at all, since you will not be allowed to import them.

Add the package to your `eslint.config.js` file:

```js
const noJs = require("eslint-no-javascript");

module.exports = [
    {
        files: ["**/*.js"],
        ignores: ["eslint.config.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest"
        },
        plugins: { "eslint-no-javascript": noJs },
        rules: {
            "eslint-no-javascript/no-javascript": "error"
        }
    }
];
```

Make sure to exclude `eslint.config.js` from the linter, or else eslint will delete its own configuration file.

Run `eslint` to check if you have used any JavaScript, and if you have then use `eslint --fix` to remove it.
