import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

function App() {
  const originalContainers = [
    {
      id: 1,
      plant: null,
      occupied: false,
    },
    {
      id: 2,
      plant: null,
      occupied: false,
    },
    {
      id: 3,
      plant: null,
      occupied: false,
    },
    {
      id: 4,
      plant: null,
      occupied: false,
    },
    {
      id: 5,
      plant: null,
      occupied: false,
    },
    {
      id: 6,
      plant: null,
      occupied: false,
    },
    {
      id: 7,
      plant: null,
      occupied: false,
    },
    {
      id: 8,
      plant: null,
      occupied: true,
    },
    {
      id: 9,
      plant: null,
      occupied: false,
    },

    {
      id: 10,
      plant: 2,
      occupied: false,
    },
  ];

  const originalPlants = [
    {
      id: 1,
      plant_name: "Dwarf",

      pic: "1",
    },
    {
      id: 2,
      plant_name: "Crowberr",

      pic: "2",
    },
    {
      id: 3,
      plant_name: "Paper birc",

      pic: "3",
    },
    {
      id: 4,
      plant_name: "Bunchberry",

      pic: "4",
    },
    {
      id: 5,

      pic: "5",
    },
    {
      id: 6,
      plant_name: "Foxglove",

      pic: "6",
    },
    {
      id: 7,
      plant_name: "Common juniper",

      pic: "7",
    },
    {
      id: 8,
      plant_name: "Goldenrod",

      pic: "8",
    },
    {
      id: 9,
      plant_name: "Sugar maple",

      pic: "9",
    },

    {
      id: 10,
      plant_name: "Crabapple tree",
      pic: "10",
    },
  ];
  const [parent, setParent] = useState(null);
  const [allPlants, setAllPlants] = useState(originalPlants);
  const [allContainers, setAllContainers] = useState(originalContainers);

  const draggableMarkup2 = (
    <Draggable id="draggable">
      <img src="./src/assets/7.png" />{" "}
    </Draggable>
  );

  function DraggableMarkup({ pic }) {
    const path = "./src/assets/" + pic + ".png";
    return (
      <Draggable id="draggable">
        <img src={path} />{" "}
      </Draggable>
    );
  }

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
                {allContainers.map((container) => (
                  // We updated the Droppable component so it would accept an `id`
                  // prop and pass it to `useDroppable`

                  <Droppable key={container.id} id={container.id}>
                    {/* // aqui tengo que hacer un mapeo de plants y preguntar por el "droppable" field si es true ponga "dragable markup", si es false ponga la estrella */}

                    <Droppable key={container.id} id={container.id}>
                      {parent === container.id ? draggableMarkup2 : "Drop here"}
                    </Droppable>

                    {container.occupied ? (
                      <Droppable key={container.id} id={container.id}>
                        {" "}
                        <DraggableMarkup pic={container.plant} />{" "}
                      </Droppable>
                    ) : (
                      <div>&#9734;</div>
                    )}
                  </Droppable>
                ))}
              </div>
            </div>
          </div>

          <div className="col-3  right ">
            {parent === null ? <DraggableMarkup pic={1} /> : null}
            {allPlants.map((plant) => {
              const path = `./src/assets/${plant.pic}.png`;
              return (
                <Draggable id={plant.id} key={plant.id}>
                  <img src={path} />
                </Draggable>
              );
            })}
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
    console.log(event);

    // If the item is occupied over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}
export default App;
