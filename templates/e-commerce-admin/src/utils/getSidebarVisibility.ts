const SIDEBAR_MENU_VISIBILITY = process.env.SIDEBAR_MENU_VISIBILITY || ""

export const getSidebarVisibility = () => {
    if (!SIDEBAR_MENU_VISIBILITY) return null
    const result = SIDEBAR_MENU_VISIBILITY.split("|").map(item => {
        const [key, rest] = item.split("-")
        return [Number(key), rest?.split(",").map(Number)]
    })
    return result
}