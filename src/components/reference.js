import { useGetReferenceQuery } from "../components_db/referenceSlice";
import { useEffect } from "react";

// Load the reference data
// TODO - should add a pop up if it fails
const LoadReference = () => {
  
  console.log("loadReference");

  useEffect(() => {
    console.log("LOAD mounted");
  });

  // const [errM, setErrM] = useState(null);
  const { data, isSuccess, isLoading, isError, error } = useGetReferenceQuery();
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("isSuccess", isSuccess);
  console.log("isError", isError);
  console.log("error", error);
  if (isSuccess) {
    console.log("all the lists: ", data);
  }
};

export default LoadReference;
