import Nav_Bar from "./Nav_Bar";

export default function Home() {
  window.sessionStorage.setItem("active_item", "user");

  return (
    <>
      <Nav_Bar />
      <div className="container">
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-12">
            <h1>{window.sessionStorage.getItem("email")}</h1>
            <div className="row space-top  ">
              <p className="col-2 text-info">
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
