export type SidebarDocListType = {
    [key: string]: {
        slug: string
        lists: {
            label: string
            slug: string
            icon?: React.ComponentType<SVGProps<SVGSVGElement>>
        }[]
    }
}