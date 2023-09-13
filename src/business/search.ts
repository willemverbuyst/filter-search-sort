/**
 * A generic search function that checks if the specified properties in an object match a provided query string.
 * @template T The type of the object to search.
 * @param {T} object The object to search.
 * @param {Array<keyof T>} properties An array of properties to search, where each property is a key of T.
 * @param {string} query The search query string.
 * @param {boolean} [shouldBeCaseSensitive=false] A boolean flag to indicate if the search should be case sensitive. Default is false.
 * @returns {boolean} Returns true if the query string is found in any of the specified properties, otherwise returns false.
 *
 * @example
 * const example = {
 *   foo: "Hello",
 *   bar: "world",
 *   quux: 1234,
 * };
 * const properties = ["foo", "bar"];
 * const query = "ello";
 * const shouldBeCaseSensitive = false;
 * const result = genericSearch(example, properties, query, shouldBeCaseSensitive);
 * console.log(result); // true
 */

export function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean = false,
): boolean {
  if (query === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];

    if (typeof value === "string" || typeof value === "number") {
      if (shouldBeCaseSensitive) {
        return value.toString().includes(query);
      } else {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      }
    }
    return false;
  });
}
