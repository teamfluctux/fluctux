"use client";
import React from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { SortableItem } from "./Sortable";
import { SortableContext } from "@dnd-kit/sortable";

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: { id: string; content: string }[];
}

export function KanbanColumn({ id, title, tasks }: KanbanColumnProps) {
  return (
    <div className="w-64 p-2">
      <h2 className="font-bold mb-2">{title}</h2>
      <Droppable id={id}>
        <SortableContext items={tasks.map((t) => t.id)}>
          {tasks.map((task) => (
            <SortableItem key={task.id} id={task.id}>
              <p className="text-black">{task.content}</p>
            </SortableItem>
          ))}
        </SortableContext>
      </Droppable>
    </div>
  );
}
