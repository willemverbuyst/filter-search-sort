import { genericSearch } from "./search";

const testObject1 = {
  foo: "X_test",
  bar: "Z_test",
  quuz: 1,
  quux: true,
};

describe("genericSort", () => {
  it("should return true", () => {
    expect(genericSearch(testObject1, ["foo", "bar"], "", true)).toEqual(true);
    expect(genericSearch(testObject1, ["foo", "bar"], "X", true)).toEqual(true);
    expect(genericSearch(testObject1, ["foo", "bar"], "x", false)).toEqual(
      true
    );
    expect(genericSearch(testObject1, ["foo", "bar"], "x")).toEqual(true);
    expect(
      genericSearch(testObject1, ["foo", "bar", "quuz"], "1", true)
    ).toEqual(true);
  });

  it("should return false", () => {
    expect(genericSearch(testObject1, ["foo", "bar"], "x", true)).toEqual(
      false
    );
    expect(genericSearch(testObject1, ["foo", "bar"], "A", false)).toEqual(
      false
    );
    expect(
      genericSearch(testObject1, ["foo", "bar", "quuz"], "2", true)
    ).toEqual(false);
    expect(
      genericSearch(testObject1, ["foo", "bar", "quux"], "2", true)
    ).toEqual(false);
  });
});
