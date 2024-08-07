import { useGetUserGardenQuery } from "../components_db/gardenSlice";
import { useState, useEffect } from "react";
import Loading_Bar from "./Loading_Bar";
import { useSelector, useStore } from "react-redux";
import { useAddGardenPlantMutation } from "../components_db/gardenSlice";

export default function GardenPlants() {
  const store = useStore();
  // Get the current User id
  const user_id = useSelector((state) => {
    return state.user.user.id;
  });
  //get plantList to display plant_name
  const plantList = useSelector((state) => {
    return state.reference.plantList;
  });
  //get specific plant status for the moment as we are not updating plant status
  const plantStatus = useSelector((state) => {
    return state.reference.plantStatusList?.[2].id;
  });
  //get current user's garden id
  const userGarden = useSelector((state) => {
    return state.garden.garden;
  });
  const garden_id = userGarden?.[0]?.id;
  const { data, isLoading, error } = useGetUserGardenQuery({
    user_id,
    garden_id,
  });
 // console.log("UserGarden data", data);
  if (isLoading) {
    return Loading_Bar("50");
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data?.plantInfo?.length) {
    return (
      <div>
        Currently, you do not have any plants in your garden. Please drag plants
        from the plant list into your garden to add them to this list.
      </div>
    );
  }
  //   const gardenPlantName = plantList
  //     ? plantList.filter((obj) => {
  //         if (obj.id === data?.plantInfo?.[0]?.plant_id) return obj;
  //       })
  //     : [{ plant_name: "no name yet" }];

  //   const displayPlantName = gardenPlantName[0]?.plant_name;
  function GetDroppedPlants() {
    store.subscribe(() => {
      store.getState().mainArrays.allContainers;
    });
    const [addGardenPlants] = useAddGardenPlantMutation();
    const [errM, setErrM] = useState(null);
    const [successM, setSuccessM] = useState(null);
    const [plants, setPlants] = useState([]);
    const [userGardenCont, setUserGardenCont] = useState(
      useSelector((state) => {
        return state.mainArrays.allContainers;
      })
    );

    const occContainers = userGardenCont.filter((occ) => {
      return occ.occupied === true;
    });
    console.log("occupied containers?", occContainers);

    if (occContainers.length > 0) {
      const mapPlants = occContainers.map((contPlant) => ({
        plant_location_x: contPlant.id,
        plant_location_y: contPlant.id,
        plant_status_id: plantStatus,
        plant_id: contPlant.plant_id,
      }));
      setPlants(mapPlants);
    }
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
    return (
      <>
        <div>
          <button
            type="submit"
            className="btn form-control btn btn-outline-success btn-sm border border-success mt-2 mb-2"
            onClick={handleAdd}
          >
            Add Plants to Garden
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
        </div>
      </>
    );
  }

  const plantNameMap = plantList.reduce((acc, plant) => {
    acc[plant.id] = plant.plant_name;
    return acc;
  }, {});

  function Plant_List() {
    return (
      <table className="table table-hover">
        <tbody>
          {data?.plantInfo?.map((plant) => {
            const random_number = Math.floor(Math.random() * 10);
            let img = "../src/assets/pictures/" + random_number + ".png";
            const displayPlantName =
              plantNameMap[plant.plant_id] || "no name yet";
            return (
              
              <tr className=" table-dark" key={plant.id}>
                <td scope="row" className="w30">
                  {displayPlantName}
                </td>
                <td className="w70">
                  <img src={img} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <div className=" border-dark bg-primary  card">
        {/* <div className="card-header ">Plants</div> */}

        <div className="table-responsive  ">
          {" "}
          <Plant_List />
          <GetDroppedPlants />
        </div>
      </div>
    </>
  );
}
