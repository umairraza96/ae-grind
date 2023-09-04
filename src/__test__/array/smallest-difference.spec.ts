import { describe, expect, it } from "vitest";
import { smallestDifference } from "../../array/smallest-difference";

describe("Smallest Difference", () => {
  it("checks truthy value", () => {
    const array1 = [-1, 5, 10, 20, 28, 3]
    const array2 = [26, 134, 135, 15, 17]
    const result = [28, 26]

    expect(smallestDifference(array1, array2)).toEqual(result)
  })
})
