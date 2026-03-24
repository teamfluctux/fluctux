"use client"
import type { CellBadgeDataType } from "@/types";
import { Badge, FxButton } from "@fluctux/ui";
import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import { Delete, Edit, Edit2Icon, Trash, X } from "lucide-react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

type AGCellBadgePropsType = {
  onRemoveRow?: (id: string) => void;
} & ICellRendererParams;

export function TAgCellBadgeRendererParams(
  params: Partial<
    Pick<
      AGCellBadgePropsType,
      "onRemoveRow"
    >
  >
) {
  return params;
}

export const AGCellBadge = forwardRef(
  (
    props: Omit<AGCellBadgePropsType, "data"> & {
      data: { type: { label: string; value: string } };
    },

    ref: React.Ref<Omit<ICellRendererComp, "getGui">>
  ) => {
    const { value, node, onRemoveRow } = props;
    const [storedValue, setStoredValue] = useState<CellBadgeDataType[]>(value);

    useImperativeHandle(ref, () => {
      return {
        refresh: (params: ICellRendererParams) => {
          return false;
        },

        getValue: () => {
          return storedValue;
        },
      };
    });

    return (
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-full h-full flex justify-start items-center gap-2">
          {storedValue.map((item, i) => {
            return (
              <Badge
                key={i}
                className="bg-background-color_850C border border-border-color_1 text-text-color_4 text-workspace_2 group"
              >
                {item.label ?? item.values}
              </Badge>
            );
          })}
        </div>
        {node.data.type.value}
        <div className="w-fit flex justify-center items-center shrink-0 gap-2">
          <FxButton
            icon={Edit}
            variant="secondary"
            size="sm"
            className="px-1.5!"
          ></FxButton>
          <FxButton
            onClick={() => onRemoveRow?.(node.data.id as string)}
            icon={Trash}
            variant="secondary"
            size="sm"
            className="px-1.5!"
          ></FxButton>
        </div>
      </div>
    );
  }
);
