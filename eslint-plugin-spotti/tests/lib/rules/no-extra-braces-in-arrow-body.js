/**
 * @fileoverview No unnecessary braces for arrow function bodies.
 * @author Joona Juusti
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-extra-braces-in-arrow-body");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ERROR_MSG = 'Omit curly braces if arrow function body has only one statement.';
const ruleTester = new RuleTester();

ruleTester.run("arrow-body-no-unnecessary-braces", rule, {
  valid: [
    {
      code: '() => test = 1',
    },
    {
      code: '() => console.log("test")',
    },
    {
      code: '() => { test = 1 }',
    },
    {
      code: `const arrowFunctionWithIfStatement = () => {
        if (0 > 0) {
          doSomething();
        }
      };`
    }
  ],
  invalid: [
    {
      code: '() => { console.log("test")}',
      errors: [{
          message: ERROR_MSG,
          type: 'ArrowFunctionExpression'
      }]
    },
    {
      code: '() => { return 3 }',
      errors: [{
          message: ERROR_MSG,
          type: 'ArrowFunctionExpression'
      }]
    }
  ]
});
