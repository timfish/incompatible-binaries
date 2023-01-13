import { fdir } from "fdir";
import assert from "assert";

const count = new fdir()
  .withFullPaths()
  .glob("./**/*.node")
  .crawl("./forge/out")
  .sync().length;

assert.strictEqual(count, 1, "There should be exactly one binary");
