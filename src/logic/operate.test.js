import operate from "./operate";

test("Entering + adds two numbers", () => {
  expect(operate(5, 2, "+")).toBe("7");
});

test("Entering - subtracts two numbers", () => {
  expect(operate(5, 2, "-")).toBe("3");
});

test("Entering x multiplies two numbers", () => {
  expect(operate(5, 2, "x")).toBe("10");
});

test("Entering ÷ divides two numbers", () => {
  expect(operate(5, 2, "÷")).toBe("2.5");
});

test("Dividing by 0 returns 0", () => {
  expect(operate(0, 5, "÷")).toBe("0");
});
