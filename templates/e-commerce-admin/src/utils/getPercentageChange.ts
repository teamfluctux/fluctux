
export const getPercentageChange = (current: number, previous: number) => {
    if (previous === 0) return 0
    return ((current - previous) / previous) * 100
}

// -- e.g. Usage: getPercentageChange(47500, 44811) // 6%