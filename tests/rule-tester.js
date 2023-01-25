import { describe, it } from "vitest";
import { RuleTester } from "eslint";

export class VitestRuleTester extends RuleTester {
  static describe(message, callback) {
    describe(message, callback);
  }

  static it(message, callback) {
    it(message, callback);
  }

  static itOnly(message, callback) {
    it.only(message, callback);
  }
}
