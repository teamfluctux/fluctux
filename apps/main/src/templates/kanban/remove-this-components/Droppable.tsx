"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, children }: { id: string; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = {
    backgroundColor: isOver ? "#e0ffe0" : "#f0f0f0",
    padding: "1rem",
    minHeight: "200px",
    borderRadius: "0.5rem",
  };

  return (
    <div ref={setNodeRef} style={style} className="transition-all">
      {children}
    </div>
  );
}
