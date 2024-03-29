// simple implementation of Array.reduce to sum the values of a numeric array
export const sum = (arr: Array<number> = []) => {
  return arr.reduce((i, curr) => curr += i , 0);
};
