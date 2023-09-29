import { describe, it, expect } from "vitest";
import { monotonicArray } from "../../array/monotonic-array";

describe("Monotonic Array", () => {
  it("it should be monotonic array", () => {
    const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
    expect(monotonicArray(array)).toEqual(true);
  });
});
