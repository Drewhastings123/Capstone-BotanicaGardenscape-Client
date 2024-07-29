import { useSelector } from "react-redux";
import { useGetReferenceQuery } from "../components_db/referenceSlice";
import { useState } from "react";

// Load the reference data
// TODO - should add a pop up if it fails
const loadReference = () => {
  console.log("loadReference");
  const [errM, setErrM] = useState(null);
  const { data, isSuccess } = useGetReferenceQuery();
  if (isSuccess) {
    console.log("all the lists: ", data);
  }
};

export default loadReference;
