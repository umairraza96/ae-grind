import { describe, it, expect } from "vitest";
import {
  bruteForceSortedSquareArray,
  sortedSquaredArray,
} from "../../array/sorted-squared-array";

describe("Sorted Squared Array", () => {
  it("returns the new squared and sorted array", () => {
    const array = [1, 2, 3, 5, 6, 8, 9];

    expect(sortedSquaredArray(array)).toEqual([1, 4, 9, 25, 36, 64, 81]);
  });

  it("checks for negative values", () => {
    const array = [-4, 1, 2];
    expect(sortedSquaredArray(array)).toEqual([1, 4, 16]);
  });
});

describe("Brute Force Sorted Squared Array", () => {
  it("returns the new squared and sorted array", () => {
    const array = [1, 2, 3, 5, 6, 8, 9];

    expect(bruteForceSortedSquareArray(array)).toEqual([
      1, 4, 9, 25, 36, 64, 81,
    ]);
  });

  it("checks for negative values", () => {
    const array = [-4, 1, 2];
    expect(bruteForceSortedSquareArray(array)).toEqual([1, 4, 16]);
  });
});
