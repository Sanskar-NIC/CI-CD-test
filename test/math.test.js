const test = require("node:test");
const assert = require("node:assert");
const { add } = require("../math.js");

test("1 + 1 should be 2", () => {
  assert.strictEqual(add(1, 1), 2);
});

test("counter goes 5 -> 6", () => {
  assert.strictEqual(add(5, 1), 6);
});