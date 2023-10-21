import { describe, it, expect } from "vitest";
import { palindromeCheck } from "../../string/palindrome-check";

describe("Palindrome Check", () => {
  it("Checks the truthy value", () => {
    expect(palindromeCheck("racecar")).toBe(true);
    expect(palindromeCheck("dad")).toBe(true);
    expect(palindromeCheck("no lemon, no melon")).toBe(true);
    expect(palindromeCheck("hannah")).toBe(true);
  });
});
