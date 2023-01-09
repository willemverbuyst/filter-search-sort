import { Sorter } from "../interfaces/Sorter";

export function sort<T>(a: T, b: T, propertyType: Sorter<T>) {
  const { property, isDescending } = propertyType;
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  };
  return isDescending ? result() * -1 : result();
}
