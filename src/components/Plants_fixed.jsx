import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Loading_Bar from "./Loading_Bar.jsx";
import loadReference from "./reference.js";
import {
  setSun,
  setSoil,
  setWater,
  setZone,
} from "../components_db/currentViewSlice.js";

import { useSelector, useDispatch } from "react-redux";

export default function Plants_fixed() {
  let isLoading = true;
  loadReference();

  const allRef = useSelector((state) => state.reference);
  const cv = useSelector((state) => state.currentView);
  const allPlants = useSelector((state) => state.reference.plantList);
  const allZones = allRef.zoneList;
  const allSuns = allRef.sunRequirementList;
  const allH2O = allRef.waterRequirementList;
  const allSoil = allRef.soilRequirementList;
  const lifeCycleList = allRef.lifeCycleList;

  const allPlantsBurnt = allRef.plantList;

  let newCV = [];

  // const fullSelects = [];

  isLoading = false;

  console.log("all ref: ", allRef);

  const dispatch = useDispatch();

  if (isLoading) {
    return Loading_Bar();
  }

  if (allPlants?.length == 0) {
    return <div>No plants found.</div>;
  }

  const updateCurrentView = (e) => {
    // console.log("NAME: " + e.target.name);
    // console.log("VALUE: " + e.target.value);
    const selectedIndex = e.target.options.selectedIndex;
    const newValue = e.target.options[selectedIndex].getAttribute("key2");
    console.log("NEW VALUE" + newValue);

    switch (e.target.name) {
      case "s_soil":
        dispatch(setSoil(newValue));
        break;
      case "s_sun":
        dispatch(setSun(newValue));
        break;
      case "s_water":
        dispatch(setWater(newValue));
        break;
      case "s_zone":
        dispatch(setZone(newValue));
        break;
      default:
        break;
    }
  };

  function Manage_Filters() {
    newCV = [];
    console.log("NewCV in manage filters" + newCV);
    const filters = [];

    if (cv.zone != "0") {
      filters.push("zone");
    }
    if (cv.water != "0") {
      filters.push("water");
    }
    if (cv.soil != "0") {
      filters.push("soil");
    }
    if (cv.sun != "0") {
      filters.push("sun");
    }

    switch (filters.length) {
      case 0: // 0 filters
        newCV = allPlantsBurnt;
        break;

      case 1: // 1 filter
        allPlantsBurnt?.forEach((plant) => {
          if (cv.zone != 0) {
            if (cv.zone == plant.zone_id) {
              newCV.push(plant);
            }
          }
          if (cv.sun != 0) {
            if (cv.sun == plant.sun_requirement_id) {
              newCV.push(plant);
            }
          }
          if (cv.water != 0) {
            if (cv.water == plant.water_requirement_id) {
              newCV.push(plant);
            }
          }
          if (cv.soil != 0) {
            if (cv.soil == plant.soil_requirement_id) {
              newCV.push(plant);
            }
          }
        });
        break;

      case 2: // 2 filters
        allPlantsBurnt?.forEach((plant) => {
          if (cv.zone != 0 && cv.water != 0) {
            //zone & waterq
            if (
              cv.zone == plant.zone_id &&
              cv.water == plant.water_requirement_id
            ) {
              newCV.push(plant);
            }
          }

          if (cv.zone != 0 && cv.sun != 0) {
            //zone & sun
            if (
              cv.zone == plant.zone_id &&
              cv.sun == plant.sun_requirement_id
            ) {
              newCV.push(plant);
            }
          }

          if (cv.zone != 0 && cv.soil != 0) {
            //zone & soil
            if (
              cv.zone == plant.zone_id &&
              cv.soil == plant.soil_requirement_id
            ) {
              newCV.push(plant);
            }
          }

          if (cv.water != 0 && cv.sun != 0) {
            //water & sun
            if (
              cv.sun == plant.sun_requirement_id &&
              cv.water == plant.water_requirement_id
            ) {
              newCV.push(plant);
            }
          }

          if (cv.water != 0 && cv.soil != 0) {
            //water & soil
            if (
              cv.soil == plant.soil_requirement_id &&
              cv.water == plant.water_requirement_id
            ) {
              newCV.push(plant);
            }
          }

          if (cv.sun != 0 && cv.soil != 0) {
            //sun & soil
            if (
              cv.soil == plant.soil_requirement_id &&
              cv.sun == plant.sun_requirement_id
            ) {
              newCV.push(plant);
            }
          }
        });
        break;

      case 3: // 3 filters
        allPlantsBurnt?.forEach((plant) => {
          if (cv.zone == 0) {
            // selected are soil, h20, sun
            if (
              cv.soil == plant.soil_requirement_id &&
              cv.water == plant.water_requirement_id &&
              cv.sun == plant.sun_requirement_id
            ) {
              newCV.push(plant);
            }
          }
          if (cv.sun == 0) {
            // selected are soil, water, zone
            if (
              cv.soil == plant.soil_requirement_id &&
              cv.water == plant.water_requirement_id &&
              cv.zone == plant.zone_id
            ) {
              newCV.push(plant);
            }
          }
          if (cv.water == 0) {
            // selected are soil, sun, zone
            if (
              cv.soil == plant.soil_requirement_id &&
              cv.zone == plant.zone_id &&
              cv.sun == plant.sun_requirement_id
            ) {
              newCV.push(plant);
            }
          }
          if (cv.soil == 0) {
            // selected are sun, water, zone
            if (
              cv.water == plant.water_requirement_id &&
              cv.zone == plant.zone_id &&
              cv.sun == plant.sun_requirement_id
            ) {
              newCV.push(plant);
            }
          }
        });
        break;

      case 4:
        allPlantsBurnt?.forEach((plant) => {
          if (
            cv.zone == plant.zone_id &&
            cv.soil == plant.soil_requirement_id &&
            cv.water == plant.water_requirement_id &&
            cv.sun == plant.sun_requirement_id
          ) {
            newCV.push(plant);
          }
        });
        break;

      default:
        break;
    }
  }

  function Plant_List() {
    const cv = useSelector((state) => state.currentView);
    console.log("current view" + cv);

    Manage_Filters();

    console.log("All Plants: " + allPlantsBurnt);
    console.log("CURRENT VIEW " + newCV);

    return (
      <table className="table table-hover">
        <tbody>
          {newCV?.map((plant) => {
            const random_number = Math.floor(Math.random() * 10);
            const img = "../src/assets/pictures/" + random_number + ".png";

            const lifeCycleName = lifeCycleList
              ? lifeCycleList.filter((obj) => {
                  if (obj.id === plant.life_cycle_id) return obj;
                })
              : [{ life_cycle_name: "no name yet" }];
            console.log("lifeCycleName", lifeCycleName);
            const displayLifeCycleName = lifeCycleName[0]?.life_cycle_name;
            console.log("life cycle", displayLifeCycleName);

            return (
              <tr className=" table-dark" key={plant.id}>
                <td scope="row" className="w30">
                  <strong>{plant.plant_name}</strong> {displayLifeCycleName}-
                  {plant.max_height}x{plant.max_width}
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
      <div className=" border-dark bg-primary  card ">
        <div className="card-header ">Plants</div>

        <div className=" row   m-1  mt-3 ">
          <div className="col-sm-6  space-around ">
            <select
              className="list-select form-control input-sm  dropdown-item text-warning dropdown border border-warning  "
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_zone"
            >
              <option key="0" className="dropdown-item" value="0" key2="0">
                Zone &#x1F321; &#8623;
              </option>

              {allZones?.map((zone) => {
                return (
                  <option
                    key={zone.id}
                    className="dropdown-item"
                    value={zone.id}
                    key2={zone.id}
                  >
                    {zone.zone_name}
                    &#x1F321; {zone.temp_range}
                    {/* &#127811; */}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className="col-sm-6 center">
            {/* <label htmlFor="s_water"> Water</label> */}
            <select
              className="list-select form-control input-sm p-1  dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_water"
            >
              <option key="0" className="dropdown-item" key2="0">
                Water &#x1F4A7; &#8623;
              </option>
              {allH2O?.map((h2o) => {
                return (
                  <option key={h2o.id} key2={h2o.id}>
                    {" "}
                    &#x1F4A7; {h2o.water_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row   center   m-1  mb-3 mt-2 ">
          <div className="col-sm-6 nav-item dropdown center ">
            <select
              className=" form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_sun"
            >
              <option key="0" className="dropdown-item" key2="0">
                Sun &#9728; &#8623;{" "}
              </option>
              {allSuns?.map((sun) => {
                return (
                  <option key={sun.id} className="dropdown-item" key2={sun.id}>
                    &#9728; {sun.sun_name}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className="col-sm-6 center ">
            <select
              className="list-select form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_soil"
            >
              <option key="0" key2="0" className="dropdown-item  ">
                Soil &#9968; &#8623;{" "}
              </option>
              {allSoil?.map((soil) => {
                return (
                  <option key={soil.id} key2={soil.id}>
                    &#9178; {soil.soil_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive  ">
        <Plant_List />
      </div>
    </>
  );
}
