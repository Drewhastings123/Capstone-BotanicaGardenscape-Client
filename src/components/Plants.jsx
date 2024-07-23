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
      id: 15,
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

  return (
    <>
      <div className="list-group border border-info">
        <div className="card-header plants-header">
          <div>Zone</div>
          <div>Water</div>
          <div>Sun</div>
        </div>

        {plantsArray.map((plant) => {
          const pic = "../src/pictures/" + plant.pic + ".png";

          console.log(pic);

          return (
            <div key={plant.id}>
              <Link
                to="/garden"
                className="list-group-item list-group-item-action active p-0 "
              >
                <div className="space-around p-1 ">
                  {" "}
                  <p className="text-muted">{plant.name}</p>
                  <img src={pic} />
                </div>
              </Link>
            </div>

            // <section key={plant.id} className="plants  ">
            //   <div className="center list-group">
            //     <Link
            //       to="/garden"
            //       className="list-group-item list-group-item-action active"
            //     >
            //       {plant.name}
            //     </Link>{" "}
            //   </div>

            //   <div className="center bg-light">
            //     {" "}
            //     <img src={pic} />{" "}
            //   </div>
            // </section>
          );
        })}
      </div>
    </>
  );
}
