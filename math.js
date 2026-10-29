function add(a, b) {
  return a + b;
}

// 🪄 Works in the browser AND in Node (for tests)
if (typeof module !== "undefined") {
  module.exports = { add };
}