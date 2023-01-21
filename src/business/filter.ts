/**
 * A generic filtering function that checks if the specified properties in an object match the provided filter criteria.
 * @template T The type of the object to filter.
 * @param {T} object The object to filter.
 * @param {Array<Filter<T>>} filterProperties An array of Filter objects, where each object has a "property" key, which is a key of T, and an "isTruthySelected" boolean value.
 * @returns {boolean} Returns true if all of the filter properties match the object, otherwise returns false.
 *
 * @example
 * const example = {
 *   foo: 1,
 *   bar: "test",
 *   quux: true,
 *   quuz: false,
 * };
 * const filterProperties = [
 *   { property: "foo", isTruthySelected: true },
 *   { property: "bar", isTruthySelected: true },
 *   { property: "quux", isTruthySelected: true },
 *   { property: "quuz", isTruthySelected: false },
 * ];
 * const result = genericFilter(example, filterProperties);
 * console.log(result); // true
 */

import { Filter } from "../interfaces/Filter";

export function genericFilter<T>(
  object: T,
  filterProperties: Array<Filter<T>>
): boolean {
  return filterProperties.every((filterProperty) => {
    const { property, isTruthySelected } = filterProperty;
    return isTruthySelected ? object[property] : !object[property];
  });
}
