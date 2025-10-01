"use client";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { Ellipsis, GripVertical, PlusIcon } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { KanbanColumn } from "./Column";
import { KanbanColumnType, KanbanTaskType } from "@/types";
import { COLUMN_DATA, TASKS_DATA } from "./constant";
import { setColumnsPinned } from "node_modules/ag-grid-community/dist/types/src/columns/columnApi";
import { createPortal } from "react-dom";
import { KanbanTask } from "./Task";
import { observer } from "mobx-react";
import { kanbanStore } from "@/services/stores/template";

export const KanbanTemplate = observer(() => {
  // TODO: use mobx

  useEffect(() => {
    if (kanbanStore.activeColumn || kanbanStore.activeTask) return;
    kanbanStore.setColumns(COLUMN_DATA);
    kanbanStore.setTasks(TASKS_DATA);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    })
  );

  const columnId = useMemo(
    () => kanbanStore.columns.map((column) => column.id),
    [kanbanStore.columns]
  );

  const onDragStart = (event: DragStartEvent) => {
    const { active } = event;

    // setting active draggable item
    if (active.data.current?.type === "column") {
      kanbanStore.setActiveColumn(active.data.current?.column);
      return;
    }
    if (active.data.current?.type === "task") {
      kanbanStore.setActiveTask(active.data.current?.task);
      return;
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const activeTask = active.data.current?.type === "task";
    const overATask = over.data.current?.type === "task";
    const overColumn = over.data.current?.type === "column";

    if (!activeTask) return;

     // drop a task over another task
    if (activeTask && overATask) {
      const activeTaskIndex = kanbanStore.tasks.findIndex(
        (task) => task.id === activeId
      );
      const overTaskIndex = kanbanStore.tasks.findIndex(
        (task) => task.id === overId
      );
      kanbanStore.tasks[activeTaskIndex]!.column_id =
        kanbanStore.tasks[overTaskIndex]!.column_id;
      kanbanStore.setTasks(
        arrayMove(kanbanStore.tasks, activeTaskIndex, overTaskIndex)
      );
    }

    
      // drop a task over another column
    if (activeTask && overColumn) {
      const activeIndex = kanbanStore.tasks.findIndex(
        (task) => task.id === activeId
      );
      kanbanStore.tasks[activeIndex]!.column_id = overId;
      kanbanStore.setTasks(
        arrayMove(kanbanStore.tasks, activeIndex, activeIndex)
      );
    }

  };

  const onDragEnd = (event: DragEndEvent) => {
    kanbanStore.setActiveColumn(null);
    kanbanStore.setActiveTask(null);
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    const activeColumn = over.data.current?.type === "column";
    const activeTask = active.data.current?.type === "task";
    const overColumn = over.data.current?.type === "column";
    const overATask = over.data.current?.type === "task";

    // change column positions
    if (activeColumn && overColumn && !activeTask) {
      const activeColumnIndex = kanbanStore.columns.findIndex(
        (col) => col.id === activeId
      );
      const overColumnIndex = kanbanStore.columns.findIndex(
        (col) => col.id === overId
      );
      kanbanStore.setColumns(
        arrayMove(kanbanStore.columns, activeColumnIndex, overColumnIndex)
      );
    }
  };

  return (
    <div>
      <div className="flex justify-start items-start gap-2 overflow-x-auto overflow-y-hidden w-full p-2 h-[calc(100vh-40px)]">
        {/* columns */}

        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
        >
          <SortableContext items={columnId}>
            {kanbanStore.columns.map((col) => {
              return (
                <KanbanColumn
                  column={col}
                  key={col.id}
                  tasks={kanbanStore.tasks.filter(
                    (task) => task.column_id === col.id
                  )}
                />
              );
            })}
          </SortableContext>
          {createPortal(
            <DragOverlay>
              {kanbanStore.activeColumn && (
                <KanbanColumn
                  column={kanbanStore.activeColumn}
                  tasks={kanbanStore.tasks.filter(
                    (task) => task.column_id === kanbanStore.activeColumn?.id
                  )}
                />
              )}
              {kanbanStore.activeTask && (
                <KanbanTask task={kanbanStore.activeTask} />
              )}
            </DragOverlay>,
            document.body
          )}
        </DndContext>
      </div>
    </div>
  );
});
