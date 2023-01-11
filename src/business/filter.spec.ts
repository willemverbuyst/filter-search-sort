import { genericFilter } from "./filter";

const testObject = {
  foo: 1,
  bar: "test",
  quux: true,
  quuz: false,
};

describe("Filter", () => {
  it("should return true when filter properties is an empty array", () => {
    expect(genericFilter(testObject, [])).toBe(true);
  });

  it("should return true", () => {
    expect(
      genericFilter(testObject, [{ property: "foo", isTruthySelected: true }])
    ).toBe(true);
    expect(
      genericFilter(testObject, [
        { property: "bar", isTruthySelected: true },
        { property: "bar", isTruthySelected: true },
        { property: "quux", isTruthySelected: true },
        { property: "quuz", isTruthySelected: false },
      ])
    ).toBe(true);
  });

  it("should return false", () => {
    expect(
      genericFilter(testObject, [{ property: "quuz", isTruthySelected: true }])
    ).toBe(false);
    expect(
      genericFilter(testObject, [
        { property: "bar", isTruthySelected: true },
        { property: "bar", isTruthySelected: true },
        { property: "quux", isTruthySelected: true },
        { property: "quuz", isTruthySelected: true },
      ])
    ).toBe(false);
  });
});
