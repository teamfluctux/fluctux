import { FxButton, FxPopover, type PopoverMenuDataType } from "@fluctux/ui";
import { Ellipsis, EyeClosed } from "lucide-react";

type DashSingleCardGroupPropsType = {
  children: React.ReactNode;
};
type DashSingleCardPropsType = {
  children: React.ReactNode;
  onActionCallback?: (value: string) => void;
  title: string;
  value: string;
  desc: string;
  buttonChild?: React.ReactNode;
};

export const DashSingleCardGroup = ({
  children,
}: DashSingleCardGroupPropsType) => {
  return (
    <div className="grid grid-cols-2 auto-rows-[400px] gap-4">{children}</div>
  );
};

const DASH_MENUS: PopoverMenuDataType = {
  "Dash Short Settings": {
    data: [
      {
        label: "Hide",
        icon: EyeClosed,
        value: "hide-dash",
      },
    ],
  },
};

export const DashSingleCard = ({
  children,
  title,
  value,
  onActionCallback,
  buttonChild,
  desc,
}: DashSingleCardPropsType) => {
  return (
    <div className="w-full h-full border border-border-color_1 overflow-hidden rounded-xl bg-background-color_925C">
      <div className="w-full h-[70px] flex px-4 justify-between items-center ">
        <div className="">
          <p className="text-workspace_1 font-medium text-text-color_1">
            {title}
          </p>
          <p className="text-workspace_3 font-medium text-text-color_2 mt-0.5">
            {desc}
          </p>
        </div>
        <div className="flex justify-end items-center gap-3">
          {onActionCallback && (
            <FxButton
              onClick={() => onActionCallback?.(value)}
              variant="secondary"
              className="rounded-[50%]! w-[30px]! h-[30px]! p-0!"
            >
              {buttonChild}
            </FxButton>
          )}
          <FxPopover
            align="end"
            items={DASH_MENUS}
            InteractChild={
              <FxButton
                variant="secondary"
                className="rounded-[50%]! w-[30px]! h-[30px]! p-0!"
              >
                <Ellipsis size={18} />
              </FxButton>
            }
          />
        </div>
      </div>
      <div className="w-full h-[calc(100%-40px)] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
