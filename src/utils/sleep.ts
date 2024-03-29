export const sleep = (delay: number = 0) => {
  return new Promise(resolve => setTimeout(resolve, delay))
};
