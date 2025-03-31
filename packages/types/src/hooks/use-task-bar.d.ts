export interface UseTaskBarPropsType {
    taskbarHoverItems: {
        slug: string,
        label: string
    }[]
}

export interface TabsRndType {
    id?: number | null,
    size?: {
        width: number, height: number
    },
    position?: {
        x: number,
        y: number
    },
    isActive?: boolean,
    slug?: string,
    label?: string,
    isMaximized?: boolean
}