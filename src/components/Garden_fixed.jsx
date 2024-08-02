import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import Left_Column from "./Left_Column";

export default function Garden_fixed() {
  return (
    <>
      <div className=" container-fluid  w100 garden_main ">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="row">
            <div className="col-3 ">
              <Left_Column />
            </div>

            <div className="col-6 pink center"></div>

            <div className="col-3 yellow"></div>
          </div>
        </DndContext>
      </div>
    </>
  );
}
