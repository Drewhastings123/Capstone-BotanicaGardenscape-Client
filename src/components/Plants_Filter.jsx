import Nav_Bar from "./Nav_Bar.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  setSun,
  setSoil,
  setWater,
  setZone,
} from "../components_db/currentViewSlice.js";

export default function Plants_Filter() {
  //const currentView = useSelector((state) => state.currentView);

  const plantsArray = [
    {
      id: 1,
      name: "Netleaf willow",
      zone: "3",
      water: "dry",
      sun: "shade",
      soil: "soft",
      pic: "pic1",
    },
    {
      id: 2,
      name: "Dwarf",
      zone: "3",
      water: "dry",
      sun: "shade",
      soil: "soft",
      pic: "pic2",
    },
    {
      id: 3,
      name: "Crowberr",
      zone: "1",
      water: "dry",
      sun: "shade",
      soil: "hard",
      pic: "pic3",
    },
    {
      id: 4,
      name: "Paper birc",
      zone: "2",
      water: "wet",
      sun: "full",
      soil: "soft",
      pic: "pic1",
    },
    {
      id: 5,
      name: "Bunchberry",
      zone: "3",
      water: "dry",
      sun: "shade",
      soil: "soft",
      pic: "pic2",
    },
    {
      id: 12,
      name: "Silverberry",
      zone: "1",
      water: "dry",
      sun: "shade",
      soil: "soft",
      pic: "pic3",
    },
    {
      id: 6,
      name: "Foxglove",
      zone: "3",
      water: "dry",
      sun: "full",
      soil: "soft",
      pic: "pic1",
    },
    {
      id: 7,
      name: "Common juniper",
      zone: "3",
      water: "wet",
      sun: "full",
      soil: "hard",
      pic: "pic2",
    },
    {
      id: 8,
      name: "Goldenrod",
      zone: "3",
      water: "dry",
      sun: "shade",
      soil: "hard",
      pic: "pic3",
    },
    {
      id: 9,
      name: "Sugar maple",
      zone: "2",
      water: "dry",
      sun: "shade",
      soil: "soft",
      pic: "pic1",
    },
    {
      id: 10,
      name: "Crabapple tree",
      zone: "4",
      water: "dry",
      sun: "shade",
      soil: "soft",
      pic: "pic2",
    },
    {
      id: 11,
      name: "Delphinium",
      zone: "4",
      water: "dry",
      sun: "shade",
      soil: "hard",
      pic: "pic3",
    },
  ];

  const dispatch = useDispatch();


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

  // const nArray = [];
  // plantsArray.forEach((plant) => {
  //   if (
  //     plant.zone == cv.zone &&
  //     plant.soil == cv.soil &&
  //     plant.water == cv.water &&
  //     plant.sun == cv.sun
  //   ) {
  //     nArray.push(plant);
  //   }
  // });
  //  dispatch(setCurrentView(nArray));

  function Plant_List() {
    //const newZone = useSelector((state) => state.currentView.zone);
    const cv = useSelector((state) => state.currentView);

    console.log("new:  " + cv.water + cv.soil + cv.sun + cv.zone);
    // const newCV = useSelector((state) => state.currentView.currentView);
    const newCV = [];
    plantsArray.forEach((plant) => {
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
    // dispatch(setCurrentView(nArray));

    return (
      <table className="table table-hover">
        <tbody>
          {newCV.map((plant) => {
            let img = "../src/assets/pictures/" + plant.pic + ".png";
            // ../assets/
            return (
              <tr className=" table-dark" key={plant.id}>
                <td scope="row" className="w30">
                  {plant.name}
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

        <div className=" row   center mt-4 mb-3">
          <div className="col-sm-5  ">
            {/* <label htmlFor="s_zone"> Zone</label> */}
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_zone"
            >
              <option value="0">Zone</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>{" "}
          </div>

          <div className="col-sm-5 ">
            {/* <label htmlFor="s_water"> Water</label> */}
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_water"
            >
              <option value="0">H2O</option>
              <option value="wet">Wet</option>
              <option value="per">Perfect</option>
              <option value="dry">Dry</option>
            </select>
          </div>
        </div>

        <div className="row   center   mb-4">
          <div className="col-sm-5  ">
            {/* <label htmlFor="s_sun"> Sun</label> */}
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_sun"
            >
              <option value="0">Sun</option>
              <option value="full">Full</option>
              <option value="half">Half</option>
              <option value="shade">Shade</option>
            </select>{" "}
          </div>

          <div className="col-sm-5 ">
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
              onChange={updateCurrentView}
              name="s_soil"
            >
              <option value="0">Soil</option>
              <option value="hard">Hard</option>
              <option value="soft">Soft</option>
            </select>
          </div>
        </div>
        <div className="table-responsive  ">
          {" "}
          <Plant_List />
        </div>
      </div>
    </>
  );
}
