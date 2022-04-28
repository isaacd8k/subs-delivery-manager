export function findOneAndRemove<T>(param: T, arr: T[]): T[] {
  // shallow copy array
  const arrCopy = arr.slice();

  // find index
  const idx = arrCopy.indexOf(param);

  // if found, remove
  if (idx > -1) {
    arrCopy.splice(idx, 1);
  }

  // return copy
  return arrCopy;
}
