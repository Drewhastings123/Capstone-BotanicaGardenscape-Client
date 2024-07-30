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
  let isLoading = true;
  loadReference();
  // const sta = useSelector((state) => state.reference);
  const allRef = useSelector((state) => state.reference);
  const cv = useSelector((state) => state.currentView);
  const allPlants = allRef.plantList;
  const allZones = allRef.zoneList;
  const allSuns = allRef.sunRequirementList;
  const allH2O = allRef.waterRequirementList;
  const allSoil = allRef.soilRequirementList;

  isLoading = false;

  console.log("all ref: ", allRef);
  console.log("cv: ", cv);
  console.log("allPlants: ", allPlants);
  console.log("allZones: ", allZones);
  console.log("allSuns: ", allSuns);
  console.log("allH2O: ", allH2O);
  console.log("allH2O: ", allSoil);

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
    switch (e.target.name) {
      case "s_soil":
        dispatch(setSoil(e.target.value));
        break;
      case "s_sun":
        dispatch(setSun(e.target.value));
        break;
      case "s_water":
        dispatch(setWater(e.target.value));
        break;
      case "s_zone":
        dispatch(setZone(e.target.value));
        break;
      default:
        break;
    }
  };
  function Plant_List() {
    const cv = useSelector((state) => state.currentView);
    console.log("new:  " + cv.water + cv.soil + cv.sun + cv.zone);

    const newCV = [];

    allPlants?.forEach((plant) => {
      if (
        plant.zone == cv.zone &&
        plant.soil == cv.soil &&
        plant.water == cv.water &&
        plant.sun == cv.sun
      ) {
        newCV.push(plant);
      }
    });
    console.log("new list " + newCV);
    return (
      <table className="table table-hover">
        <tbody>
          {allPlants?.map((plant) => {
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
  const separator = " &#10048;";

  return (
    <>
      <div className=" border-dark bg-primary  card">
        <div className="card-header ">Plants</div>

        <div className=" row   center mt-4 mb-3">
          <div className="col-sm-5  ">
            <select
              className="list-select form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning "
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_zone"
            >
              <option key="0" className="dropdown-item  ">
                Zone &#x1F321; &#8623;
              </option>

              {allZones?.map((zone) => {
                return (
                  <option key={zone.id}>
                    {zone.zone_name}
                    {separator} *{zone.temp_range}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className="col-sm-5 ">
            {/* <label htmlFor="s_water"> Water</label> */}
            <select
              className="list-select form-control input-sm p-1  dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_water"
            >
              <option key="0" className="dropdown-item  ">
                Water &#x1F4A7; &#8623;
              </option>
              {allH2O?.map((h2o) => {
                return <option key={h2o.id}>{h2o.water_name}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="row   center   mb-4 ">
          <div className="col-sm-5 nav-item dropdown ">
            <select
              className=" form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_sun"
            >
              <option key="0" className="dropdown-item  ">
                Sun &#9728; &#8623;{" "}
              </option>
              {allSuns?.map((sun) => {
                return (
                  <option key={sun.id} className="dropdown-item">
                    {sun.sun_name}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className="col-sm-5 ">
            <select
              className="list-select form-control input-sm p-1 dropdown-item text-warning dropdown border border-warning"
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_soil"
            >
              <option key="0" className="dropdown-item  ">
                Soil &#9178; &#8623;{" "}
              </option>
              {allSoil?.map((soil) => {
                return <option key={soil.id}>{soil.soil_name}</option>;
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
