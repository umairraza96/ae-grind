import { describe, it, expect } from "vitest";
import {
  moveElementToEnd,
  moveElementToEndWithOrder,
} from "../../array/move-element-to-end";

describe("moveElementToEnd", () => {
  it("should move element to the end of the array", () => {
    const array = [2, 1, 2, 2, 2, 3, 4, 2];
    const element = 2;
    const expected = [4, 1, 3, 2, 2, 2, 2, 2];
    expect(moveElementToEnd(array, element)).toEqual(expected);
  });

  it("should move element to the end of the array", () => {
    const array = [2, 1, 2, 2, 2, 3, 4, 2];
    const element = 2;
    const expected = [1, 3, 4, 2, 2, 2, 2, 2];
    expect(moveElementToEndWithOrder(array, element)).toEqual(expected);
  });
});
