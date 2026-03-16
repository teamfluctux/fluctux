
type DashSingleCardGroupPropsType = {
        children: React.ReactNode
}
type DashSingleCardPropsType = {
    children: React.ReactNode
}

export const DashSingleCardGroup = ({children}: DashSingleCardGroupPropsType) => {
    return <div className="grid grid-cols-2 auto-rows-[400px] gap-4">
{children}
    </div>
}

export const DashSingleCard = ({children}: DashSingleCardPropsType) => {
    return <div className="w-full h-full border border-border-color_1 rounded-xl bg-background-color_925C">
{children}
    </div>
}