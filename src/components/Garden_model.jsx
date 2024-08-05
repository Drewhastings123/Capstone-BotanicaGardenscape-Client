import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import Original_Plants from "./Original_Plants";
import Original_Containers from "./Original_Containers";
import Left_Column from "./Left_Column";
import Right_Column from "./Right_Column";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllPlants,
  setAllContainers,
  setPlantsInGarden,
} from "../components_db/mainArraysSlice.js";

export default function Garden_model() {
  const [allPlants, setAllPlants] = useState(Original_Plants);
  const dispatch = useDispatch();
  dispatch(
    setAllContainers([
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
      {
        id: 11,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 12,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 13,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 14,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 15,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 16,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 17,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 18,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 19,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },

      {
        id: 20,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 21,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 22,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 23,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 24,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 25,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 26,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 27,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 28,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 29,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 30,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 31,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 32,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 33,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 34,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
      {
        id: 35,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },

      {
        id: 36,
        plant_id: null,
        plant_pic: null,
        occupied: false,
      },
    ])
  );

  const [plantsLeftC, setPlantsLeftC] = useState([]);
  const shap = useSelector((state) => state.currentView.shape);
  const allContainers = useSelector((state) => state.mainArrays.allContainers);

  const mainArrays = useSelector((state) => state.mainArrays);
  console.log("MAIN ARRAYS" + mainArrays);
  const mainSt = useSelector((state) => state);
  const contFinales = mainSt.mainArrays.allContainers.Original_Containers;
  console.log("LOS CONT FINAL" + contFinales);

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
      //filter
      const result = allPlants.filter(
        (plant) => plant.id == container.plant_id
      );

      //in_garden={false}
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
        <div className="white-soft"></div>
      </Droppable>
    );
  }

  function Left_List() {
    const leftCoulumnPlants = [];
    const allC = allContainers.Original_Containers;
    allC.forEach((cont) => {
      if (cont.occupied) {
        leftCoulumnPlants.push(cont.plant_id);
      }
    });
    // console.log("Left New List: " + leftCoulumnPlants);
  }

  function Bring_Shape() {
    if (shap == "cir") {
      return (
        <div className="  text-light  shape p-3 rounded-circle  ">
          {" "}
          <div className="mainContainer">
            {allContainers.map((container) => (
              // We updated the Droppable component so it would accept an `id`
              // prop and pass it to `useDroppable`
              <GetDroppable key={container.id} container={container} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="   text-light  shape p-3  ">
          {" "}
          <div className="mainContainer">
            {allContainers.map((container) => (
              // We updated the Droppable component so it would accept an `id`
              // prop and pass it to `useDroppable`
              <GetDroppable key={container.id} container={container} />
            ))}
          </div>
        </div>
      );
    }
  }

  function handleDragEnd(event) {
    const plant_id = event.active.id;
    const new_cont_id = event.over?.id;
    const new_all_containers = [...allContainers];
    const new_all_plants = [...allPlants];
    const old_cont_id = event.active.data.current.old_cont;
    const was_garden = event.active.data.current.in_garden;

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

    // if (was_garden) {
    if (old_cont_id != 50) {
      const updatedPlants2 = allPlants.map((plant) => {
        if (plant.id == plant_id) {
          return { ...plant, in_garden: false };
        } else {
          return plant;
        }
      });
      setAllPlants(updatedPlants2);
    } else {
      const updatedPlants = allPlants.map((plant) => {
        if (plant.id == plant_id) {
          return { ...plant, in_garden: true };
        } else {
          return plant;
        }
      });

      setAllPlants(updatedPlants);
    }
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="row p-5 pt-3   ">
          <small className="col-12 tik  p-0 pb-2 pt-2">
            Plants in your garden:
            <span className="text-info sl"> No plants yet</span>
          </small>

          <div className="col-3 left p-0   ">
            <Left_Column />
          </div>

          <div className="col-6  center   ">
            <Bring_Shape />
          </div>

          <div className="col-3 p-0 right  ">
            <Right_Column />
          </div>
        </div>
      </DndContext>
    </div>
  );
}

{
  /* <Droppable id={50}>
                {allPlants.map((plant) => {
                  const path = `./src/assets/${plant.pic}.png`;
                  if (plant.in_garden == false) {
                    return (
                      <Draggable id={plant.id} key={plant.id} old_cont={50}>
                        <img src={path} />
                      </Draggable>
                    );
                  }
                })}
              </Droppable> */
}
