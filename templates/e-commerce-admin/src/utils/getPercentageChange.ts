
/**
 * Calculate percentage change between two values
 *
 * Measures the relative change from a previous value to a current value.
 * Returns a positive number for growth and negative for decline.
 * @param current 
 * @param previous 
 * @returns A postive or negative number
 * @example getPercentageChange(47500, 44811) // 6%
 */
export const getPercentageChange = (current: number, previous: number): number => {
    if (previous === 0) return 0
    return Math.round(((current - previous) / previous) * 100)
}