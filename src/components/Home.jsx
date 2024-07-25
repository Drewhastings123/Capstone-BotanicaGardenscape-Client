//import Nav_Bar from "./Nav_Bar";
import { useState } from "react";
import { useSelector } from "react-redux";
import SelectList from "./SelectList";

import { useGetReferenceQuery } from "../components_db/referenceSlice";

export default function Home() {
  window.sessionStorage.setItem("active_item", "home");

  const [errM, setErrM] = useState(null);

  const { data, isSuccess } = useGetReferenceQuery();
  if (isSuccess) {
    console.log("all the lists: ", data);
    console.log("isSuccess: ", isSuccess);
  }

  const zoneList = useSelector((state) => {
    return state.reference.zoneList;
  });
  console.log("z: ", zoneList);

  return (
    <>
      {/* <Nav_Bar /> */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h1>Welcome to Botanica Gardenscape</h1>
            {
              <SelectList
                theList={zoneList}
                theListName="Zone"
                theParentForm="Home"
              />
            }
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
