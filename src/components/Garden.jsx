import Nav_Bar from "./Nav_Bar";
export default function Garden() {
  window.sessionStorage.setItem("active_item", "garden");
  return (
    <>
      <Nav_Bar />
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            Loading ...
            <div className="progress">
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
        
      </div>
    </>
  );
}
