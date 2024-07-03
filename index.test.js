import { RuleTester } from "eslint";

import rule from "./index.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "eslint-no-javascript",
  rule,
  {
    valid: [{
      code: "",
    }],
    invalid: [{
        code: "const foo = 'baz';",
        output: '',
        errors: 1,
      }, {
        code: "console.log('test');",
        output: '',
        errors: 1,
      }, {
        code: "function random() { return 4; }",
        output: '',
        errors: 1,
      }, {
        code: "const x = 4; console.log(x);",
        output: ' ',
        errors: 1,
      }],
  }
);

console.log("All tests passed!");
