import { describe, it, expect } from "vitest";
import {
  spiralTraverse,
  spiralTraverseRecursion,
} from "../../array/spiral-traverse";

describe("Spiral Traverse", () => {
  it("it should be spirally traverse array", () => {
    const array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    expect(spiralTraverse(array)).toEqual(expected);
  });
  it("it should be spirally traverse array with recursion", () => {
    const array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    expect(spiralTraverseRecursion(array)).toEqual(expected);
  });
});
