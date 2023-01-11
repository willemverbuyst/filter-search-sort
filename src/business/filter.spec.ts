import { genericFilter } from "./filter";

describe("Filter", () => {
  it("should return true when filter properties is an empty array", () => {
    expect(genericFilter({ foo: 1 }, [])).toBe(true);
  });

  it("should return true if truthty flag is true", () => {
    expect(
      genericFilter({ foo: 1 }, [{ property: "foo", isTruthySelected: true }])
    ).toBe(true);
    expect(
      genericFilter({ foo: true }, [
        { property: "foo", isTruthySelected: true },
      ])
    ).toBe(true);
  });

  it("should return false if thruthy flag is false", () => {
    expect(
      genericFilter({ foo: 1 }, [{ property: "foo", isTruthySelected: false }])
    ).toBe(false);
  });

  it("should return true if truthty flag is false and prop is false", () => {
    expect(
      genericFilter({ foo: false }, [
        { property: "foo", isTruthySelected: false },
      ])
    ).toBe(true);
  });
});
