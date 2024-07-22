import { Link } from "react-router-dom";

export default function Nav_Bar() {
  const active = window.sessionStorage.getItem("active_item");

  function RenderLogo() {
    if (active == "home") {
      return (
        <>
        
        <Link to="/" className=" navbar-brand bg-success">
          Botanica
          Gardenscape  
        </Link>
        </>
      );
    } else {
      return (
        <Link to="/" className="navbar-brand">
          Botanica Gardenscape
        </Link>
      );
    }
  }

  function RenderMenu() {
    switch (active) {
      case "home":
        return (
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link to="/garden" className="nav-link ">
                My Garden{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Register{" "}
              </Link>
            </li>
          </ul>
        );

      case "login":
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/garden" className="nav-link">
                My Garden{" "}
              </Link>
            </li>
            <li className="nav-item  bg-success">
              <Link to="/login" className="nav-link white">
                Login{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Register{" "}
              </Link>
            </li>
          </ul>
        );

      case "register":
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/garden" className="nav-link">
                My Garden{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link ">
                Login{" "}
              </Link>
            </li>
            <li className="nav-item  bg-success  ">
              <Link to="/registration" className="nav-link white">
                Register{" "}
              </Link>
            </li>
          </ul>
        );

      case "garden":
        return (
          <ul className="navbar-nav ">
            <li className="nav-item bg-success ">
              <Link to="/garden" className="nav-link white">
                My Garden{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Register{" "}
              </Link>
            </li>
          </ul>
        );
    }
  }

  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="material-symbols-outlined">yard</span>
        <RenderLogo />

        <div className="collapse navbar-collapse">
          <RenderMenu />
        </div>
      </nav>
    </>
  );
}
