import isNumber from "./isNumber";

test("The input must be a number", () => {
  expect(isNumber(5)).toBe(typeof 5 === "number");
});
