/**
 * A generic sorting function that sorts an array of objects based on the specified property and sort order.
 * @template T The type of the objects in the array.
 * @param {T} a The first object to compare.
 * @param {T} b The second object to compare.
 * @param {Sorter<T>} propertyType An object containing the property to sort by, and a boolean flag indicating the sort order.
 * @returns {number} Returns 1 if a is greater than b, -1 if a is less than b, and 0 if a and b are equal.
 *
 * @example
 * const example = [
 *   { name: "John", age: 20 },
 *   { name: "Jane", age: 25 },
 *   { name: "Bob", age: 22 },
 * ];
 * const propertyType = { property: "age", isDescending: false };
 * example.sort((a, b) => genericSort(a, b, propertyType));
 * console.log(example);
 * // Output: [{ name: "John", age: 20 }, { name: "Bob", age: 22 }, { name: "Jane", age: 25 }]
 */

import { Sorter } from "../interfaces/Sorter";

export function genericSort<T>(a: T, b: T, propertyType: Sorter<T>): number {
  const { property, isDescending } = propertyType;
  const result = (): number => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  };
  return isDescending ? result() * -1 : result();
}
