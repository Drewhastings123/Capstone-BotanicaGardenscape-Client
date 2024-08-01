import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

function App() {
  const containers = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
  ];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">
      <img src="./src/assets/7.png" />{" "}
    </Draggable>
  );

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="row p-5 ">
          <div className="col-3 left  ">Left</div>

          <div className="col-6  center ">
            {/* <div className="  p-2 text-light  shape rounded-circle "> */}
            <div className="  p-2 text-light  shape ">
              {" "}
              <div className="mainContainer">
                {containers.map((id) => (
                  // We updated the Droppable component so it would accept an `id`
                  // prop and pass it to `useDroppable`
                  <Droppable key={id} id={id}>
                    {parent === id ? draggableMarkup : <div>&#9734;</div>}
                  </Droppable>
                ))}
              </div>
            </div>
          </div>

          <div className="col-3  right ">
            {parent === null ? draggableMarkup : null}
          </div>
        </div>
      </DndContext>
    </div>

    // <DndContext onDragEnd={handleDragEnd}>
    //   {parent === null ? draggableMarkup : null}
    // <div className="mainContainer">
    //   {containers.map((id) => (
    //     // We updated the Droppable component so it would accept an `id`
    //     // prop and pass it to `useDroppable`
    //     <Droppable key={id} id={id}>
    //       {parent === id ? draggableMarkup : <div>&#9935;</div>}
    //     </Droppable>
    //   ))}
    // </div>
    // </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}
export default App;
