// -- Example: 0-1,2|1-0,2
export const getSidebarHiddenItemsPostions = (data?: string) => {
  if (!data) return {};
  const result = data.split("|").map((item) => {
    const [key, rest] = item.split("-");
    return [Number(key), rest?.split(",").map(Number)];
  });
  //   result = [
  //   [0, [1, 2]],
  //   [1, [0, 2]]
  // ] 3D array
  return Object.fromEntries(result);
};

// Function Output:
// {
//   0: [1, 2],  // group index 0 → hide items at index 1 and 2
//   1: [0, 2]   // group index 1 → hide items at index 0 and 2
// }
