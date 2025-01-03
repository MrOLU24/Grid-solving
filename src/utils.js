export const range = (start, end, step = 1) => {
  let output = [];

  // Handle scenario where only `start` is provided (e.g., range(5))
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Generate numbers from start to end with a step
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};