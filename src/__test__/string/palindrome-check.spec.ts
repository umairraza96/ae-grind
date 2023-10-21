import { describe, it, expect } from "vitest";
import {
  palindromeCheck,
  palindromeCheckPointer,
  palindromeCheckRecursion,
} from "../../string/palindrome-check";

describe("Palindrome Check", () => {
  it("Checks the truthy value", () => {
    expect(palindromeCheck("racecar")).toBe(true);
    expect(palindromeCheck("dad")).toBe(true);
    expect(palindromeCheck("no lemon, no melon")).toBe(true);
    expect(palindromeCheck("hannah")).toBe(true);
  });

  it("Checks falsy values", () => {
    expect(palindromeCheck("boat")).toBe(false);
  });
});

describe("Palindrome Check with Pointers", () => {
  it("Checks the truthy value", () => {
    expect(palindromeCheckPointer("racecar")).toBe(true);
    expect(palindromeCheckPointer("dad")).toBe(true);
    expect(palindromeCheckPointer("no lemon, no melon")).toBe(true);
    expect(palindromeCheckPointer("hannah")).toBe(true);
  });

  it("Checks falsy values", () => {
    expect(palindromeCheckPointer("boat")).toBe(false);
    expect(palindromeCheckPointer("habnah")).toBe(false);
  });
});

describe("Palindrome Check with Recursion", () => {
  it("Checks the truthy value", () => {
    expect(palindromeCheckRecursion("racecar")).toBe(true);
    expect(palindromeCheckRecursion("dad")).toBe(true);
    expect(palindromeCheckRecursion("no lemon, no melon")).toBe(true);
    expect(palindromeCheckRecursion("hannah")).toBe(true);
  });

  it("Checks falsy values", () => {
    expect(palindromeCheckRecursion("boat")).toBe(false);
    expect(palindromeCheckRecursion("habnah")).toBe(false);
  });
});
