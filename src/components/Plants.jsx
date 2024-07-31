import Nav_Bar from "./Nav_Bar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import loadReference from "./reference.js";
import {
  setSun,
  setSoil,
  setWater,
  setZone,
} from "../components_db/currentViewSlice.js";

import { useSelector, useDispatch } from "react-redux";

export default function Plants() {
  const allPlantsBurnt = [
    {
      id: 0,
      plant_name: "Netleaf willow",
      zone_id: "f8cb79dd-7e13-4f3c-8aa0-3a464a27d04a", // 3a
      water_requirement_id: "542cf1e2-6526-4988-ab10-9b6244b5b1d4", //dry
      sun_requirement_id: "ff25b1d9-6222-4771-b981-79dd5cd9fc8e", //  Part Shade
      soil_requirement_id: "13313161-f9a9-43d3-b7b2-3de6d8279644", // Loam Soil
      pic: "0",
    },
    {
      id: 1,
      plant_name: "Dwarf",
      zone_id: "83ec730b-86d9-470f-8976-66d7c2493f02", // 6A
      water_requirement_id: "97ee6f82-7570-4741-8dc0-32571e99330c", // Wet
      sun_requirement_id: "996e59b5-a311-41a9-a323-37e667852b25", // Shade
      soil_requirement_id: "13313161-f9a9-43d3-b7b2-3de6d8279644", // Loam Soil
      pic: "1",
    },
    {
      id: 2,
      plant_name: "Crowberr",
      zone_id: "2150bf16-e297-409a-a487-586478f98b22", // 5A
      water_requirement_id: "97ee6f82-7570-4741-8dc0-32571e99330c", // Wet
      sun_requirement_id: "98d6ac5a-5a50-4bf6-9b43-a6d6866c4de8", //full sun
      soil_requirement_id: "25b0ae9f-daa0-4b51-bc2c-44d404403194", //Clay Soil
      pic: "2",
    },
    {
      id: 3,
      plant_name: "Paper birc",
      zone_id: "83ec730b-86d9-470f-8976-66d7c2493f02", // 6A
      water_requirement_id: "a670a36b-9ce9-4165-81bc-795d12bec052", // Moist
      sun_requirement_id: "ff25b1d9-6222-4771-b981-79dd5cd9fc8e", //  Part Shade
      soil_requirement_id: "71bd5721-9da4-4b7f-8e30-3b104e91f67d", //Chalk Soil
      pic: "3",
    },
    {
      id: 4,
      plant_name: "Bunchberry",
      zone_id: "2150bf16-e297-409a-a487-586478f98b22", // 5A
      water_requirement_id: "97ee6f82-7570-4741-8dc0-32571e99330c", // Wet
      sun_requirement_id: "98d6ac5a-5a50-4bf6-9b43-a6d6866c4de8", //full sun
      soil_requirement_id: "25b0ae9f-daa0-4b51-bc2c-44d404403194", //Clay Soil
      pic: "4",
    },
    {
      id: 5,
      plant_name: "Silverberry",
      zone_id: "ed8ab558-2d7f-4a6f-94f8-e5e975062da9", // 4A
      water_requirement_id: "9b2ce2d0-7e2f-4404-a7aa-d3505d6b3079", // Moderate
      sun_requirement_id: "ff25b1d9-6222-4771-b981-79dd5cd9fc8e", //  Part Shade
      soil_requirement_id: "71bd5721-9da4-4b7f-8e30-3b104e91f67d", // Chalk Soil
      pic: "5",
    },
    {
      id: 6,
      plant_name: "Foxglove",
      zone_id: "ed8ab558-2d7f-4a6f-94f8-e5e975062da9", // 4A
      water_requirement_id: "5a1da49a-b12f-4f1c-ac1a-5312df8f34e1", // Damp
      sun_requirement_id: "ff25b1d9-6222-4771-b981-79dd5cd9fc8e", //  Part Shade
      soil_requirement_id: "6fd3f3e0-4a07-44bc-9aa4-ceb8a2f2e79a", //Silty Soil
      pic: "6",
    },
    {
      id: 7,
      plant_name: "Common juniper",
      zone_id: "f8cb79dd-7e13-4f3c-8aa0-3a464a27d04a", // 3a
      water_requirement_id: "542cf1e2-6526-4988-ab10-9b6244b5b1d4", //dry
      sun_requirement_id: "ff25b1d9-6222-4771-b981-79dd5cd9fc8e", //  Part Shade
      soil_requirement_id: "13313161-f9a9-43d3-b7b2-3de6d8279644", // Loam Soil
      pic: "7",
    },
    {
      id: 8,
      plant_name: "Goldenrod",
      zone_id: "83ec730b-86d9-470f-8976-66d7c2493f02", // 6A
      water_requirement_id: "97ee6f82-7570-4741-8dc0-32571e99330c", // Wet
      sun_requirement_id: "996e59b5-a311-41a9-a323-37e667852b25", // Shade
      soil_requirement_id: "13313161-f9a9-43d3-b7b2-3de6d8279644", // Loam Soil
      pic: "8",
    },
    {
      id: 9,
      plant_name: "Sugar maple",
      zone_id: "f8cb79dd-7e13-4f3c-8aa0-3a464a27d04a", // 3a
      water_requirement_id: "5a1da49a-b12f-4f1c-ac1a-5312df8f34e1", // Damp
      sun_requirement_id: "98d6ac5a-5a50-4bf6-9b43-a6d6866c4de8", //full sun
      soil_requirement_id: "45fbacc2-777b-432c-a97b-0763398e7e2f", //Sandy Soil
      pic: "9",
    },

    {
      id: 10,
      plant_name: "Crabapple tree",
      zone_id: "ed8ab558-2d7f-4a6f-94f8-e5e975062da9", // 4a
      water_requirement_id: "a670a36b-9ce9-4165-81bc-795d12bec052", // Moist
      sun_requirement_id: "03d4d735-e460-4b7f-9c27-63bfe2441455", // Part Sun
      soil_requirement_id: "45fbacc2-777b-432c-a97b-0763398e7e2f", //Sandy Soil
      pic: "0",
    },
    {
      id: 11,
      plant_name: "Delphinium",
      zone_id: "f8cb79dd-7e13-4f3c-8aa0-3a464a27d04a", // 3a
      water_requirement_id: "5a1da49a-b12f-4f1c-ac1a-5312df8f34e1", // Damp
      sun_requirement_id: "98d6ac5a-5a50-4bf6-9b43-a6d6866c4de8", //full sun
      soil_requirement_id: "45fbacc2-777b-432c-a97b-0763398e7e2f", //Sandy Soil
      pic: "1",
    },
  ];
  let isLoading = true;
  loadReference();
  // const sta = useSelector((state) => state.reference);
  const allRef = useSelector((state) => state.reference);
  const cv = useSelector((state) => state.currentView);
  const allPlants = useSelector((state) => state.reference.plantList);
  const allZones = allRef.zoneList;
  const allSuns = allRef.sunRequirementList;
  const allH2O = allRef.waterRequirementList;
  const allSoil = allRef.soilRequirementList;
  const [plants, setPlants] = useState([])

  // const fullSelects = [];

  isLoading = false;

  console.log("all ref: ", allRef);

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="row w100 top2">
        <div className="col-12 ">
          Loading ...
          <div className="progress bg-primary">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success "
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (allPlants?.length == 0) {
    return <div>No plants found.</div>;
  }

  const updateCurrentView = (e) => {
    e.preventDefault();
    // console.log("NAME: " + e.target.name);
    // console.log("VALUE: " + e.target.value);
    const selectedIndex = e.target.options.selectedIndex;
    const newName = e.target.name;
    const newId = e.target.options[selectedIndex].id;
    const tempPlant = allPlantsBurnt
    const filteredPlants = tempPlant.filter((plant) => {
      return plant[newName] === newId
    })
    setPlants(filteredPlants)
  };

  useEffect(() => {
    setPlants(allPlantsBurnt)
  },[])

  function Plant_List() {
    // setPlants(allPlantsBurnt)
    // const cv = useSelector((state) => state.currentView);
    // console.log("current view" + cv);
    // let newCV = [];
    // if (cv.zone == "0" && cv.soil == "0" && cv.water == "0" && cv.sun == "0") {
    //   newCV = allPlantsBurnt;
    // } else {
    //   allPlantsBurnt?.forEach((plant) => {
    //     if (
    //       cv.zone == plant.zone_id &&
    //       cv.soil == plant.soil_requirement_id &&
    //       cv.water == plant.water_requirement_id &&
    //       cv.sun == plant.sun_requirement_id
    //     ) {
    //       newCV.push(plant);
    //     }
    //   });
    // }

    // console.log("All Plants: " + plants);
    // console.log("CURRENT VIEW " + newCV);

    return (
      <table className="table table-hover">
        <tbody>
          {plants?.map((plant) => {
            const random_number = Math.floor(Math.random() * 10);
            const img = "../src/assets/pictures/" + random_number + ".png";

            return (
              <tr className=" table-dark" key={plant.id}>
                <td scope="row" className="w30">
                  {plant.plant_name}
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
        <div className="card-header ">Plants</div>

        <div className=" row   center mt-4 mb-3 m-1">
          <div className="col-sm-6  ">
            <select
              className="list-select form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning "
              defaultValue="0"
              onChange={updateCurrentView}
              name="zone_id"
            >
              <option key="0" className="dropdown-item" value="0">
                Zone &#x1F321; &#8623;
              </option>

              {allZones?.map((zone) => {
                return (
                  <option
                    key={zone.id}
                    className="dropdown-item"
                    value={zone.id}
                  >
                    {zone.zone_name}
                    &#x1F321; {zone.temp_range}
                    {/* &#127811; */}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className="col-sm-6 ">
            {/* <label htmlFor="s_water"> Water</label> */}
            <select
              className="list-select form-control input-sm p-1  dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="water_requirement_id"
            >
              <option key="0" className="dropdown-item">
                Water &#x1F4A7; &#8623;
              </option>
              {allH2O?.map((h2o) => {
                return (
                  <option key={h2o.id} id={h2o.id}>
                    {" "}
                    &#x1F4A7; {h2o.water_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row   center   mb-4 m-1 ">
          <div className="col-sm-6 nav-item dropdown ">
            <select
              className=" form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="sun_requirement_id"
            >
              <option key="0" className="dropdown-item">
                Sun &#9728; &#8623;{" "}
              </option>
              {allSuns?.map((sun) => {
                return (
                  <option key={sun.id} className="dropdown-item" id={sun.id}>
                    &#9728; {sun.sun_name}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className="col-sm-6 ">
            <select
              className="list-select form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="soil_requirement_id"
            >
              <option key="0" className="dropdown-item  ">
                Soil &#9968; &#8623;{" "}
              </option>
              {allSoil?.map((soil) => {
                return (
                  <option key={soil.id} id={soil.id}>
                    &#9178; {soil.soil_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="table-responsive  ">
          <Plant_List />
        </div>
      </div>
    </>
  );
}
