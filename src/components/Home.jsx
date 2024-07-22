import Nav_Bar from "./Nav_Bar";

export default function Home() {
  window.sessionStorage.setItem("active_item", "home");
  return (
    <>
      <Nav_Bar />
      <div className="container">
        <div className="row">
          <div className="col-3">
           
          </div>
          <div className="col-6">
           <h1>Home</h1>
          </div>
          <div className="col-3">
           
          </div>
        </div>
      </div>
    </>
  );
}
