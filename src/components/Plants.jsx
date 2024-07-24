import Nav_Bar from "./Nav_Bar";
import { Link } from "react-router-dom";

export default function Plants() {
  const plantsArray = [
    {
      id: 1,
      name: "Netleaf willow",
      zone: "1",
      water: "dry",
      sun: "full",
      pic: "pic1",
    },
    { id: 2, name: "Dwarf", zone: "1", water: "wet", sun: "full", pic: "pic2" },
    {
      id: 3,
      name: "Crowberr",
      zone: "1",
      water: "dry",
      sun: "shade",
      pic: "pic3",
    },
    {
      id: 4,
      name: "Paper birc",
      zone: "2",
      water: "wet",
      sun: "full",
      pic: "pic1",
    },
    {
      id: 5,
      name: "Bunchberry",
      zone: "2",
      water: "moistured",
      sun: "shade",
      pic: "pic2",
    },
    {
      id: 12,
      name: "Silverberry",
      zone: "2",
      water: "dry",
      sun: "shade",
      pic: "pic3",
    },
    {
      id: 6,
      name: "Foxglove",
      zone: "3",
      water: "dry",
      sun: "full",
      pic: "pic1",
    },
    {
      id: 7,
      name: "Common juniper",
      zone: "3",
      water: "wet",
      sun: "full",
      pic: "pic2",
    },
    {
      id: 8,
      name: "Goldenrod",
      zone: "3",
      water: "dry",
      sun: "shade",
      pic: "pic3",
    },
    {
      id: 9,
      name: "Sugar maple",
      zone: "4",
      water: "wet",
      sun: "full",
      pic: "pic1",
    },
    {
      id: 10,
      name: "Crabapple tree",
      zone: "4",
      water: "moistured",
      sun: "shade",
      pic: "pic2",
    },
    {
      id: 11,
      name: "Delphinium",
      zone: "5",
      water: "dry",
      sun: "shade",
      pic: "pic3",
    },
  ];

  function Plant_List() {
    return (
      <table className="table table-hover">
        <tbody>
          {plantsArray.map((plant) => {
            let img = "../src/pictures/" + plant.pic + ".png";
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
      <div className=" border-primary mb-4   card">
        <div className="card-header ">Plants</div>

        <div className="row   center  ">
          <div className="col-sm-5  ">
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
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
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
            >
              <option value="0">H2O</option>
              <option value="1">Wet</option>
              <option value="2">Perfect</option>
              <option value="3">Dry</option>
            </select>
          </div>
        </div>

        <div className="row   center mtn1 ">
          <div className="col-sm-5  ">
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
            >
              <option value="0">Sun</option>
              <option value="1">Full</option>
              <option value="2">Half</option>
              <option value="3">Shade</option>
            </select>{" "}
          </div>

          <div className="col-sm-5 ">
            <select
              className="list-select form-control input-sm p-1 "
              defaultValue="0"
            >
              <option value="0">Soil</option>
              <option value="1">Hard</option>
              <option value="2">Soft</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive ">
        {" "}
        <Plant_List />
      </div>
    </>
  );
}
