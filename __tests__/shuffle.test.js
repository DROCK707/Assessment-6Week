const shuffle = require("../src/shuffle");


describe("Test Shuffle Function", () => {
  test("Does Shuffle return an array", () => {
    let result = shuffle([1,2,3])
    expect(Array.isArray(result)).toBe(true)
  })

  test("Does it actually suffle the array?", () => {
    let initialArr = [1,2,3]
    let shuffledArr = shuffle(initialArr)
    expect(shuffledArr).not.toEqual(initialArr)
  })
});
