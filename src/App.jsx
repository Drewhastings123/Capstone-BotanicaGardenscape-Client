import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

function App() {
  const originalContainers = [
    {
      id: 1,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 2,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 3,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 4,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 5,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 6,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 7,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 8,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
    {
      id: 9,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },

    {
      id: 10,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    },
  ];

  const originalPlants = [
    {
      id: 1,
      plant_name: "Dwarf",

      pic: "1",
      in_garden: false,
    },
    {
      id: 2,
      plant_name: "Crowberr",
      in_garden: false,
      pic: "2",
    },
    {
      id: 3,
      plant_name: "Paper birc",
      in_garden: false,
      pic: "3",
    },
    {
      id: 4,
      plant_name: "Bunchberry",
      in_garden: false,
      pic: "4",
    },
    {
      id: 5,
      plant_name: "Eucalyptus",
      in_garden: false,
      pic: "5",
    },
    {
      id: 6,
      plant_name: "Foxglove",
      in_garden: false,
      pic: "6",
    },
    {
      id: 7,
      plant_name: "Common juniper",
      in_garden: false,
      pic: "7",
    },
    {
      id: 8,
      plant_name: "Goldenrod",
      in_garden: false,
      pic: "8",
    },
    {
      id: 9,
      plant_name: "Sugar maple",
      in_garden: false,
      pic: "9",
    },

    {
      id: 10,
      plant_name: "Crabapple tree",
      pic: "10",
      in_garden: false,
    },
  ];
  const [parent, setParent] = useState(null);
  const [allPlants, setAllPlants] = useState(originalPlants);
  const [allContainers, setAllContainers] = useState(originalContainers);
  const [oldCont, setOldCont] = useState(null);

  function handleDragEnd(event) {
    const plant_id = event.active.id;
    const new_cont_id = event.over?.id;
    const new_all_containers = [...allContainers];
    const new_all_plants = [...allPlants];
    const old_cont_id = event.active.data.current.old_cont;
    // console.log("BEFORE");
    // new_all_containers.forEach((cont) =>
    //   console.log("todos en orden" + cont.id + cont.occupied)
    // );

    const new_cont_obj = {
      id: new_cont_id,
      plant_id: plant_id,
      plant_pic: plant_id,
      occupied: true,
    };

    const objIndex = new_all_containers.findIndex(
      (obj) => obj.id == new_cont_id
    );
    new_all_containers[objIndex] = new_cont_obj;

    const old_cont_obj = {
      id: old_cont_id,
      plant_id: null,
      plant_pic: null,
      occupied: false,
    };

    const objOC = new_all_containers.findIndex((obj) => obj.id == old_cont_id);
    new_all_containers[objOC] = old_cont_obj;

    setAllContainers(new_all_containers);

    const objPlantIndex = new_all_plants.findIndex((obj) => obj.id == plant_id);

    const updatedPlants = new_all_plants.map((plant) => {
      if (plant.id == plant_id) {
        return { ...plant, in_garden: true };
      } else {
        return plant;
      }
    });

    setAllPlants(updatedPlants);
    // console.log("affter");
    // allContainers.forEach((cont) =>
    //   console.log("despues" + cont.id + cont.occupied)
    // );
  }

  function DraggableMarkup({ pic, plant_id, old_cont }) {
    const path = "./src/assets/" + pic + ".png";
    return (
      <Draggable id={plant_id} old_cont={old_cont}>
        <img src={path} />{" "}
      </Draggable>
    );
  }

  function GetDroppable({ container }) {
    // console.log(container.id + container.pic + container.occupied);
    if (container.occupied) {
      return (
        <Droppable key={container.id} id={container.id}>
          {" "}
          <DraggableMarkup
            key={container.plant_id}
            pic={container.plant_pic}
            plant_id={container.plant_id}
            old_cont={container.id}
          />{" "}
        </Droppable>
      );
    }
    return (
      <Droppable key={container.id} id={container.id}>
        {" "}
        <div>&#9734;</div>
      </Droppable>
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
                  <GetDroppable key={container.id} container={container} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-3  right ">
            {/* {parent === null ? <DraggableMarkup pic={1} /> : null} */}
            {allPlants.map((plant) => {
              const path = `./src/assets/${plant.pic}.png`;
              if (plant.in_garden == false) {
                return (
                  <Draggable id={plant.id} key={plant.id} old_cont={25}>
                    <img src={path} />
                  </Draggable>
                );
              }
            })}
          </div>
        </div>
      </DndContext>
    </div>
  );
}
export default App;
