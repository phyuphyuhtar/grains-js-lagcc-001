'use strict';
const square = require("../lib/grains.js")
const total = require("../lib/grains.js")

describe("Grains", function () {

  it("square 1", function () {
    expect(square(1)).toEqual(1);
  });

  it("square 2", function () {
    expect(square(2)).toEqual(2);
  });

  it("square 3", function () {
    expect(square(3)).toEqual(4);
  });

  it("square 4", function () {
    expect(square(4)).toEqual(8);
  });

  it("square 16", function () {
    expect(square(16)).toEqual(32768);
  });

  it("square 32", function () {
    expect(square(32)).toEqual(2147483648);
  });

  it("square 64", function () {
    expect(square(64)).toEqual(9223372036854775808);
  });

  it("total", function () {
    expect(total()).toEqual(18446744073709551615);
  });
});
