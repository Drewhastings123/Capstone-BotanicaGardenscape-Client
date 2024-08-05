import React, { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import Garden from "./Garden";
import Original_Plants from "./Original_Plants";
import Original_Containers from "./Original_Containers";
import Plants_fixed from "./Plants_fixed";
import { useSelector, useDispatch } from "react-redux";
import zero from "../assets/pictures/7.png";
import { useAddGardenPlantMutation } from "../components_db/gardenSlice";
export default function Garden_fixed() {
  //   const [allPlants, setAllPlants] = useState(Original_Plants);
  const [allContainers, setAllContainers] = useState(Original_Containers);

  const allContainersExtended = allContainers?.map((container) => ({
    ...container,
    plant_pic: Math.floor(Math.random() * 10),
  }));

  const allRef = useSelector((state) => state.reference);
  const allPlantsBurnt2 = allRef.plantList;
  const allPlantsExtended2 = allPlantsBurnt2?.map((plant) => ({
    ...plant,
    in_garden: false,
    pic: Math.floor(Math.random() * 10),
  }));
  const [allPlants, setAllPlants] = useState(allPlantsExtended2);

  //   setAllContainers(allContainersExtended);
  //   setAllPlants(allPlantsExtended2);

  console.log("ALL CONTAINERS" + allContainers);

  function handleDragEnd(event) {
    const plant_id = event.active.id;
    const new_cont_id = event.over?.id;
    const new_all_containers = [...allContainersExtended];
    console.log("new all containers", new_all_containers);
    const old_cont_id = event.active.data.current.old_cont;

    const result = allPlantsExtended2.filter((plant) => plant.id == plant_id);
    const plant_pic = result.pic;

    const new_cont_obj = {
      id: new_cont_id,
      plant_id: plant_id,
      plant_pic: plant_pic,
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
      const updatedPlants2 = allPlantsExtended2.map((plant) => {
        if (plant.id == plant_id) {
          return { ...plant, in_garden: false };
        } else {
          return plant;
        }
      });
      setAllPlants(updatedPlants2);
    } else {
      const updatedPlants = allPlantsExtended2.map((plant) => {
        if (plant.id == plant_id) {
          return { ...plant, in_garden: true };
        } else {
          return plant;
        }
      });

      setAllPlants(updatedPlants);
    }
  }

  function DraggableMarkup({ pic, plant_id, old_cont }) {
    const path = zero;
    return (
      <Draggable id={plant_id} old_cont={old_cont}>
        <img src={path} className="img-m" />{" "}
      </Draggable>
    );
  }
  function GetDroppable({ container }) {
    // console.log(container.id + container.pic + container.occupied);
    if (container.occupied) {
      //filter
      //   const result = allPlants.filter(
      //     (plant) => plant.id == container.plant_id
      //   );

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
  console.log("trying to get plant id out of containers", allContainers);
  console.log("if occupied is true", allContainers[1].occupied);
  const occContainters = allContainers.filter((occ) => {
    return occ.occupied === true;
  });
  console.log("occupied containers?", occContainters);
  // function AddGardenPlants() {
  const plantStatus = useSelector((state) => {
    return state.reference.plantStatusList?.[2].id;
  });
  console.log("plantStatus", plantStatus);
  const garden = useSelector((state) => {
    return state.garden.garden;
  });
  const garden_id = garden?.[0].id;
  console.log("gf garden id?", garden_id);
  const [addGardenPlants] = useAddGardenPlantMutation();
  const [errM, setErrM] = useState(null);
  const [successM, setSuccessM] = useState(null);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (occContainters.length > 0) {
      const mapPlants = occContainters.map((contPlant) => ({
        plant_location_x: contPlant.id,
        plant_location_y: contPlant.id,
        plant_status_id: plantStatus,
        plant_id: contPlant.plant_id,
      }));
      setPlants(mapPlants);
    }
  }, [allContainers]);

  const handleAdd = async (e) => {
    e.preventDefault();
    setErrM(null);
    let success = true;
    console.log("what are plants?", plants);
    for (const plant of plants) {
      try {
        await addGardenPlants({ garden_id, plant }).unwrap();
      } catch (err) {
        setErrM("Error adding plants");
      }
    }
    if (!success) {
      setErrM("Save not successful");
    } else {
      setSuccessM("Plants saved successfully");
    }
  };
  // }

  return (
    <>
      <div className=" container-fluid  w100 garden_main ">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="row">
            {" "}
            {/* row*/}
            <div className="col-3 ">
              {" "}
              {/* column 1 */}
              <Garden />
            </div>
            <div className="col-6  center">
              {" "}
              {/* column 2 */}
              <div className="  p-2 text-light  shape ">
                <div className="mainContainer">
                  <button
                    type="submit"
                    className="btn form-control btn btn-outline-success btn-sm border border-success mt-2 mb-2"
                    onClick={handleAdd}
                  >
                    Save Plants to Garden
                  </button>
                  {successM && (
                    <div className="row">
                      <div className="col-12">
                        <p className="text-warning">{successM}</p>
                      </div>
                    </div>
                  )}
                  {errM && (
                    <div className="row">
                      <div className="col-12">
                        <p className="text-warning">{errM}</p>
                      </div>
                    </div>
                  )}
                  {allContainersExtended.map((container) => (
                    <GetDroppable key={container.id} container={container} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-3 ">
              {" "}
              {/* column 3 */}
              <Plants_fixed />
            </div>
            {/*closes row */}
          </div>
        </DndContext>
      </div>
    </>
  );
}
