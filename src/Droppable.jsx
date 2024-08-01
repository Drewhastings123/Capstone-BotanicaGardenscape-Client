import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    // id: "droppable",
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="drop_position">
      {props.children}
    </div>
  );
}
