import { describe, expect, it } from "vitest";
import {
  validateSubsequence,
  validateSubsequenceWithForLoop,
} from "../../array/validate-subsequence";

describe("Validating Subsequence", () => {
  it("Validates Subsequence to be true", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];

    expect(validateSubsequence(array, sequence)).toEqual(true);
  });

  it("Validates Subsequence to be false", () => {
    const array = [5, 1, 22, 25, 6, 1, 8, 10];
    const sequence = [1, 6, -1, 10];

    expect(validateSubsequence(array, sequence)).toEqual(false);
  });
});

describe("Validate Subsequence with for loop", () => {
  it("Validates Subsequence to be true", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];

    expect(validateSubsequenceWithForLoop(array, sequence)).toEqual(true);
  });

  it("Validates Subsequence to be false", () => {
    const array = [5, 1, 22, 25, 6, 1, 8, 10];
    const sequence = [1, 6, -1, 10];

    expect(validateSubsequenceWithForLoop(array, sequence)).toEqual(false);
  });
});
