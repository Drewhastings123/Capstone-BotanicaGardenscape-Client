import React from "react";
import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

// import Original_Containers from "./Original_Containers";
import Left_Column from "./Left_Column";
import Right_Column from "./Right_Column";
import { useSelector, useDispatch } from "react-redux";
import { setAllContainers } from "../components_db/mainArraysSlice.js";
import { setPlantsInGarden } from "../components_db/mainArraysSlice.js";
import { setAllPlants } from "../components_db/mainArraysSlice.js";

export default function Garden_model() {
  const shap = useSelector((state) => state.currentView.shape);
  const allRef = useSelector((state) => state.reference);
  const ma = useSelector((state) => state.mainArrays);
  const allPlants = ma.allPlants;
  const allPlantsExtended = ma.originalExtPlants;

  // const mainArrays = useSelector((state) => state.mainArrays);

  // const mainSt = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllContainers();
  }, []);

  function getAllContainers() {
    const oc = [
      {
        id: 1,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 2,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 3,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 4,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 5,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 6,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 7,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 8,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 9,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },

      {
        id: 10,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 11,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 12,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 13,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 14,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 15,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 16,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 17,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 18,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 19,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },

      {
        id: 20,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 21,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 22,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 23,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 24,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 25,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 26,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 27,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 28,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 29,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 30,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 31,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 32,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 33,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 34,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 35,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
      {
        id: 36,
        plant_id: null,
        plant_pic: null,
        vacancy: true,
      },
    ];
    dispatch(setAllContainers(oc)), [];
  }

  // const st = useSelector((state) => state);
  const allContainers = useSelector((state) => state.mainArrays.allContainers);
  const plantsInGarden = useSelector(
    (state) => state.mainArrays.plantsInGarden
  );

 
  

  function DraggableMarkup({ plant_id, old_cont }) {
    //const npa = [...allPlants];
    const npa = useSelector((state) => state.mainArrays.allPlants);
    const plant_obj = allPlantsExtended.filter((plant) => plant.id == plant_id);

    const path = "./src/assets/pictures/" + plant_obj[0]?.pic + ".png";
    const plant_name = plant_obj[0]?.plant_name;
    //const path = "";

    return (
      <>
        {" "}
        <Draggable id={plant_id} old_cont={old_cont}>
          <p>{plant_name}</p>
          <img src={path} />{" "}
        </Draggable>
      </>
    );
  }

  function GetDroppable({ container }) {
    if (container.vacancy == false) {
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
    const old_cont_id = event.active.data.current.old_cont;

    const plant_obj = allPlants.filter((plant) => plant.id == plant_id);
    const plant_price = plant_obj[0].price;

    const plant_pic = plant_obj[0].pic;
    const plant_name = plant_obj[0].plant_name;
    const plant_mx_h = plant_obj[0].max_height;
    const plant_mx_w = plant_obj[0].max_width;
    const life_cycle_id = plant_obj[0].life_cycle_id;

    const new_cont_obj = {
      id: new_cont_id,
      plant_id: plant_id,
      plant_pic: plant_pic,
      vacancy: false,
    };

    const old_cont_obj = {
      id: old_cont_id,
      plant_id: null,
      plant_pic: null,
      vacancy: true,
    };

    const new_plantInGarden = {
      id: plant_id,
      name: plant_name,
      price: plant_price,
    };

    const new_plant = {
      id: plant_id,
      plant_name: plant_name,
      max_height: plant_mx_h,
      max_width: plant_mx_w,
      pic: plant_pic,
      price: plant_price,
      life_cycle_id: life_cycle_id,
    };

    // container 50 is the plant list container, which is also a "droppable"
    if (old_cont_id == 50) {
      // a.(add plant to the container in containers array ...
      const allContainers_temp = [...allContainers];
      const containerIndexN = allContainers_temp.findIndex(
        (container) => container.id == new_cont_id
      );
      allContainers_temp[containerIndexN] = new_cont_obj;
      dispatch(setAllContainers(allContainers_temp));

      // ... and remove plant from plants array)
      const allPlants_temp = [...allPlants];
      const plantIndex = allPlants_temp.findIndex(
        (plant) => plant.id == plant_id
      );

      allPlants_temp.splice(plantIndex, 1);
      dispatch(setAllPlants(allPlants_temp));

      // b.(add plant to plantsInGarden)
      //setPlantsInGarden
      const plantsInGarden_temp = [...plantsInGarden];
      plantsInGarden_temp.push(new_plantInGarden);

      dispatch(setPlantsInGarden(plantsInGarden_temp));
    } else {
      if (new_cont_id == 50) {
        // a. add plant to plantsArray ,
        // cant do it yet until
        const allPlants_temp = [...allPlants];

        allPlants_temp.push(new_plant);
        dispatch(setAllPlants(allPlants_temp));

        // b. update containersArray (set old container to vacancy: true and plant_id: null)
        const allContainers_temp = [...allContainers];
        const containerIndexO = allContainers_temp.findIndex(
          (container) => container.id == old_cont_id
        );
        allContainers_temp[containerIndexO] = old_cont_obj;
        dispatch(setAllContainers(allContainers_temp));

        // remove from plantsInGarden
        const plantsInGarden_temp = [...plantsInGarden];
        const plantIndex = plantsInGarden_temp.findIndex(
          (plant) => plant.id == plant_id
        );
        const plantRemoved = plantsInGarden_temp.splice(plantIndex, 1);
        dispatch(setPlantsInGarden(plantsInGarden_temp));
      } else {
        // update containers array , a. add plant in new container,
        const allContainers_temp = [...allContainers];
        const containerIndexN = allContainers_temp.findIndex(
          (container) => container.id == new_cont_id
        );
        allContainers_temp[containerIndexN] = new_cont_obj;
        dispatch(setAllContainers(allContainers_temp));

        // b. remove plant from old container(set to vacancy: true and plant_id: null)
        const allContainers_temp2 = [...allContainers];
        const containerIndexO = allContainers_temp2.findIndex(
          (container) => container.id == old_cont_id
        );
        allContainers_temp2[containerIndexO] = old_cont_obj;
        dispatch(setAllContainers(allContainers_temp));
      }
    }
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="row p-5 pt-3   ">
          <small className="col-12  tik  p-0 pb-2 pt-2 ">
            Plants in the garden:
            <span className="text-info sl tik">
              {/* {if (plantsInGarden.length == 0)(<div>no hay plantas</div>)} */}
              {plantsInGarden?.map((plant) => {
                return <div key={plant.id}>{plant.name}, </div>;
              })}
            </span>
          </small>

          <div className="col-3 left p-0    ">
            <Left_Column />
          </div>

          <div className="col-6  center    ">
            <Bring_Shape />
          </div>

          <div className="col-3 p-0 right_column   ">
            <Right_Column />
          </div>
        </div>
      </DndContext>
    </div>
  );
}
