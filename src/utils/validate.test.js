import { validateInput } from "./validate";

describe("validate", () => {
  test("returns true for a correct input", () => {
    const input = "Naples";

    expect(validateInput(input)).toBeTruthy();
  });

  test("returns false for an incorrect input", () => {
    const input = "423jde_d0";
    expect(validateInput(input)).toBeFalsy();
  });
});
