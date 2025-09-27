"use client";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { GripVertical } from "lucide-react";
import React from "react";

export const KanbanTemplate = () => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    })
  );
  return (
    <div>
      <div className="flex justify-start items-start gap-2 overflow-x-auto overflow-y-hidden w-full p-2 h-[calc(100vh-40px)]">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <div
              key={i}
              className="w-full min-w-[300px] max-w-[300px]  h-full"
            >
              <div className="h-[40px] flex justify-between items-center group relative overflow-hidden">
                <div className="flex justify-start items-center gap-3">

                <FxButton  variant="ghost_zinc_2" className="w-[20px] h-[20px] absolute transition-all left-[-100%] group-hover:!left-0 top-1/2 -translate-y-1/2" radius="tiny">
                <GripVertical size={LUCIDE_WORKSPACE_ICON_SIZE} />
                </FxButton>
                <h3 className="text-text-color_1 text-workspace_1 font-medium relative left-0 group-hover:left-6 transition-all" >The column {i}</h3>
                </div>
              </div>
              <div className="h-[calc(100%-40px)] w-full rounded-rounded_10C border border-border-color_1"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
