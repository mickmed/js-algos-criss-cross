let algos = require("../crissCross.js");


test("returns difference of sums of kitty corners)", () => {
  expect(algos.crissCross([[1,2,3],[4,5,6],[7,8,9]])).toBe(0);
  expect(algos.crissCross([[3,2,1],[4,5,6],[3,2,5]])).toBe(4);
  expect(algos.crissCross([[2,2,1],[4,5,6],[3,2,5]])).toBe(3);

});