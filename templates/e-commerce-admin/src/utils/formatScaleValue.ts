/**
 * Format a number into a human-readable scale
 *
 * Converts large numbers into a shortened representation
 * using B (Billion), M (Million) or K (Thousand) suffixes.
 *
 * @param value - The number to format
 * @returns Formatted string of the number
 *
 * @example
 * formatScaleValue(47500000)  // "47.5M"
 * formatScaleValue(3490)      // "3.5K"
 * formatScaleValue(1500000000) // "1.5B"
 * formatScaleValue(24)        // "24"
 */
export const formatScaleValue = (value: number): string => {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return value.toString()
}