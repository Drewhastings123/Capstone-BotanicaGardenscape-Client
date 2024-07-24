import { useGetAllUsersQuery } from "../components_db/userSlice";
import Nav_Bar from "./Nav_Bar";

export default function Home() {
  // window.sessionStorage.setItem("active_item", "user");
  const { data, error, isLoading } = useGetAllUsersQuery();

  console.log("userData", data)

  if (isLoading) {
    return <div className="row w100 top2">
    <div className="col-12 ">
      {" "}
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
  </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No account found.</div>;
  }

  return (
    <>
      {/* <Nav_Bar /> */}
      <div className="container top5">
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-12">
            <h1>{window.sessionStorage.getItem("email")}</h1>
            <div className="row space-top  ">
              <p className="col-2 text-danger">
                {" "}
                {window.sessionStorage.getItem("firstName")}{" "}
              </p>

              <p className="col-10 text-info">
                {window.sessionStorage.getItem("lastName")}{" "}
              </p>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
