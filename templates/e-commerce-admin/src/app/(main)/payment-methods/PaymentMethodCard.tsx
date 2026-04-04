import { FxButton, FxPopover, type PopoverMenuDataType } from "@fluctux/ui";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";
import { DollarSign, Info, FileText, PowerOff } from "lucide-react";

const PaymentEllipsisMenu: PopoverMenuDataType = {
  "settings": {
    data: [
      { label: "See pricing & fees", icon: DollarSign },
      { label: "Learn more", icon: Info },
      { label: "See terms of service", icon: FileText },
    ]
  },
  "status": {
    data: [
      { label: "Disable", status: "DANGER", icon: PowerOff },
    ]
  }
}
export const PaymentMethodCard = () => {
  return (
    <div className="w-full h-[270px] border border-border-color_1 rounded-lg bg-background-color_925C overflow-hidden">
      <div className="h-[calc(100%-90px)] border-b border-border-color_1 w-full bg-background-color_900C rounded-b-lg p-1">
        <div className="rounded-sm overflow-hidden w-full h-full ">
          <Image
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/020/975/570/small/visa-logo-visa-icon-transparent-free-png.png"
            }
            width={500}
            height={500}
            className=" object-contain w-full h-full"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[90px] py-2 px-3 relative">
        <div className="leading-4.5 mt-1">

        <p className="text-workspace_1 font-medium one-line-ellipsis">Visa</p>
        <p className="text-workspace_3 text-text-color_2 one-line-ellipsis">
          Visa pay with visa
        </p>
        </div>
        <div className="w-fit flex justify-center items-center gap-2 absolute right-2 bottom-2 ">
          <FxButton size="xs">Setup</FxButton>
          
          <FxPopover align="end" side="top" InteractChild={<FxButton size="square_xs" variant="secondary" className="rounded-sm" icon={Ellipsis} />} items={PaymentEllipsisMenu}  />
        </div>

      </div>
    </div>
  );
};
