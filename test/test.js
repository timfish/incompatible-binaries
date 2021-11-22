const { fdir } = require("fdir");
const assert = require("assert");

const count = new fdir()
  .withFullPaths()
  .glob("./**/*.node")
  .crawl("./forge/out")
  .sync().length;

assert.strictEqual(count, 1, "There should be exactly one binary");
