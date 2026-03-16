
type DashSingleCardPropsType = {
    children: React.ReactNode
}

export const DashSingleCard = ({children}: DashSingleCardPropsType) => {
    return <div className="w-full h-[400px] border border-border-color_1 rounded-xl bg-background-color_925C">
{children}
    </div>
}