import { ArrowUp, PlusIcon } from "lucide-react"

type OverViewHeaderDataBoxPropsType = {
    title: string,
    key: string,
    displayValue: number,
    scaleValue: number
}

export const OverViewHeaderDataBox = ({title, key}: OverViewHeaderDataBoxPropsType) => {
    return <div key={key} className="w-full h-full border-r border-border-color_1 p-3 relative">
            <div className="flex justify-start items-center gap-1.5 ">
              <div className="w-[5px] h-[16px] bg-blue-600 rounded-full "></div>
              <span className="text-text-color_2 text-workspace_2 font-medium">
                {title}
              </span>
            </div>

            <div className="flex justify-start items-center gap-1.5 mt-2">
              <span className="text-read_20 font-medium">$ 47.5M</span>{" "}
              <span className="text-rdx-green-fg flex justify-center items-center gap-0">
                <PlusIcon size={16} className="text-rdx-green-fg" />
                6%
              </span>
            </div>
            <div className="h-[35px] border-t absolute bottom-0 left-0 w-full flex justify-start items-center px-3 border-border-color_1">
              <div className="w-[20px] h-[20px] rounded-full shrink-0 bg-surface-green-bg-active flex justify-center items-center">
                <ArrowUp size={14} className="text-rdx-green-fg" />
              </div>
              <div className="flex justify-start items-center gap-1 text-workspace_2 font-medium ml-1">
                <span className="text-rdx-green-fg">349</span>
                <span className="text-text-color_2">•</span>
                <span className="text-text-color_2">vs last month</span>
              </div>
            </div>
          </div>
}