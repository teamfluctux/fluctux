/**
 * Parse sidebar hidden items positions from a encoded string
 *
 * Decodes a string pattern into a lookup object where each key is a group index
 * and the value is an array of item indices that should be hidden in that group.
 *
 * @param data - Encoded string in format `groupIndex-itemIndex,itemIndex|groupIndex-itemIndex`
 * @returns A lookup object mapping group indices to arrays of hidden item indices
 *
 * @example
 * getSidebarHiddenItemsPostions("0-1,2|1-0,2")
 * // { 0: [1, 2], 1: [0, 2] }
 *
 * @example
 * getSidebarHiddenItemsPostions(undefined)
 * // {}
 */
export const getSidebarHiddenItemsPostions = (data?: string) => {
  if (!data) return {};
  const result = data.split("|").map((item) => {
    const [key, rest] = item.split("-");
    return [Number(key), rest?.split(",").map(Number)];
  });
  return Object.fromEntries(result);
};
