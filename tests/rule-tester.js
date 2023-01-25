import { describe, it } from "vitest";
import { RuleTester } from "eslint";

RuleTester.describe = (message, callback) => {
  describe(message, callback);
};

RuleTester.it = (message, callback) => {
  it(message, callback);
};

RuleTester.itOnly = (message, callback) => {
  it.only(message, callback);
};

export { RuleTester };
