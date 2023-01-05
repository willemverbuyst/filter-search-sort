export function sort<T>(a: T, b: T, property: keyof T) {
  if (a[property] > b[property]) {
    return 1;
  } else if (a[property] < b[property]) {
    return -1;
  }
  return 0;
}
