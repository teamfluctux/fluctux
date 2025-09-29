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
import React, { useMemo, useState } from "react";
import { KanbanColumn } from "./Column";
import { KanbanColumnType, KanbanTaskType } from "@/types";
import { COLUMN_DATA, TASKS_DATA } from "./constant";
import { setColumnsPinned } from "node_modules/ag-grid-community/dist/types/src/columns/columnApi";
import { createPortal } from "react-dom";
import { KanbanTask } from "./Task";

export const KanbanTemplate = () => {
  // TODO: use mobx
  const [columns, setColumns] = useState<KanbanColumnType[]>(COLUMN_DATA);
  const [activeColumn, setActiveColumn] = useState<KanbanColumnType | null>(
    null
  );
  const [activeTask, setActiveTask] = useState<KanbanTaskType | null>(null);
  const [tasks, setTasks] = useState<KanbanTaskType[]>(TASKS_DATA);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    })
  );

  const columnId = useMemo(() => columns.map((column) => column.id), [columns]);

  const onDragStart = (event: DragStartEvent) => {
    const { active } = event;

    // setting active draggable item
    if (active.data.current?.type === "column") {
      setActiveColumn(active.data.current?.column);
      return;
    }
    if (active.data.current?.type === "task") {
      setActiveTask(active.data.current?.task);
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

    if (!activeTask) return;

    // drop a task over another task
    if (activeTask && overATask) {
      setTasks((tasks) => {
        const activeTaskIndex = tasks.findIndex((task) => task.id === activeId);
        const overTaskIndex = tasks.findIndex((task) => task.id === overId);
        tasks[activeTaskIndex]!.column_id = tasks[overTaskIndex]!.column_id;
        return arrayMove(tasks, activeTaskIndex, overTaskIndex);
      });
    }

    // drop a task over another column
    const overColumn = over.data.current?.type === "column";
    if (activeTask && overColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((task) => task.id === activeId);
        tasks[activeIndex]!.column_id = overId;
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveTask(null);
    const { active, over } = event;
    if (!over) return;
    const activeColumnId = active.id;
    const overColumnId = over.id;
    const activeColumn = over.data.current?.type === "column";
    const activeTask = active.data.current?.type === "task";
    const overColumn = over.data.current?.type === "column";

    if (activeColumnId === overColumnId) return;
    // change column positions
    if (activeColumn && overColumn && !activeTask) {
      setColumns((columns) => {
        const activeColumnIndex = columns.findIndex(
          (col) => col.id === activeColumnId
        );
        const overColumnIndex = columns.findIndex(
          (col) => col.id === overColumnId
        );
        return arrayMove(columns, activeColumnIndex, overColumnIndex);
      });
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
            {columns.map((col) => {
              return (
                <KanbanColumn
                  column={col}
                  key={col.id}
                  tasks={tasks.filter((task) => task.column_id === col.id)}
                />
              );
            })}
          </SortableContext>
          {createPortal(
            <DragOverlay>
              {activeColumn && (
                <KanbanColumn
                  column={activeColumn}
                  tasks={tasks.filter(
                    (task) => task.column_id === activeColumn.id
                  )}
                />
              )}
              {activeTask && <KanbanTask task={activeTask} />}
            </DragOverlay>,
            document.body
          )}
        </DndContext>
      </div>
    </div>
  );
};
