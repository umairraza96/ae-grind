

import { describe, expect, it } from "vitest";
import { twoNumberSum, twoNumberSumWithValueAndIndex } from "../../array/two-number-sum";

describe("Two Number Sum", () => {

  it("checks if the sum exists", () => {
    const array = [3, 5, -4, 8, 11, 1, -1, 6]
    const target = 10
    const array2 = [1, 2, 3, 4]
    const target2 = 6


    expect(twoNumberSum(array, target)).toEqual(true)
    expect(twoNumberSum(array2, target2)).toEqual(true)
  })
})

describe("Two Number Sum With Value and Index", () => {

  it("checks if the sum exists", () => {
    const array = [3, 5, -4, 8, 11, 1, -1, 6]
    const target = 10
    const array2 = [1, 2, 3, 4]
    const target2 = 6


    expect(twoNumberSumWithValueAndIndex(array, target)).toEqual({
      values: [-1, 11],
      indexes: [6, 4]
    })
    expect(twoNumberSumWithValueAndIndex(array2, target2)).toEqual({
      values: [4, 2],
      indexes: [3, 1]
    })
  })
})
