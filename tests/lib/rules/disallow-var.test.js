/**
 * @fileoverview Disallow variables declared with `var`
 * @author Alex LaFroscia
 */

import { RuleTester } from "../../rule-tester";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/disallow-var");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
  },
});

ruleTester.run("disallow-var", rule, {
  valid: ["const foo = 'bar';", "let foo = 'bar';"],

  invalid: [
    {
      code: "var foo = 'bar';",
      errors: [
        { message: "`var` is not allowed", type: "VariableDeclaration" },
      ],
    },
  ],
});
