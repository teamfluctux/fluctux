import { FxButton } from "@fluctux/ui";
import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import { Eye } from "lucide-react";
import React, { forwardRef } from "react";

type AgViewAsPopupParamsType = {
  onViewAsClick?: (id: string) => void;
} & ICellRendererParams;

export function TAgViewAsPopupRendererParams(
  params: Partial<Pick<AgViewAsPopupParamsType, "onViewAsClick">>
) {
  return params;
}

export const AgViewAsPopup = (
  params: AgViewAsPopupParamsType,
  ref: React.Ref<Omit<ICellRendererComp, "getGui">>
) => {
  const { value, onViewAsClick, node } = params;
  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="w-full one-line-ellipsis">{value}</div>
      <FxButton
        onClick={() => onViewAsClick?.(node.data.id as string)}
        icon={Eye}
        variant="ghost_zinc_2"
        size="square_xs"
      />
    </div>
  );
};
