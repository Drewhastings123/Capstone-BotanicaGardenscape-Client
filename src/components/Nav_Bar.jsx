import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav_Bar() {
  const active = window.sessionStorage.getItem("active_item");
  const token = window.sessionStorage.getItem("token");

  const navigate = useNavigate();

  function Logout() {
    window.sessionStorage.removeItem("token");
    navigate("/login");
  }

  function RenderLogo() {
    if (active == "home") {
      return (
        <>
          <Link to="/" className=" navbar-brand active bg-success ">
            Botanica Gardenscape
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
    const email = window.sessionStorage.getItem("email");
    
    if (token && active == "home") {
      return (
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item">
            <Link to="/garden" className="nav-link ">
              My Garden{" "}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/user" className="nav-link ">
              {email}
            </Link>
          </li>

          <li className="nav-item logout ">
            <button
              type="button"
              className="btn btn-link text-white-50 pt-1 "
              onClick={() => Logout()}
            >
              Logout
            </button>
          </li>
        </ul>
      );
    }

    if (token && active == "garden") {
      return (
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item active bg-success">
            <Link to="/garden" className="nav-link ">
              My Garden{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link ">
              {email}
            </Link>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-link text-white-50"
              onClick={() => Logout()}
            >
              Logout
            </button>
          </li>
        </ul>
      );
    }

    if (token && active == "user") {
      return (
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item ">
            <Link to="/garden" className="nav-link ">
              My Garden{" "}
            </Link>
          </li>
          <li className="nav-item active bg-success">
            <Link to="/user" className="nav-link ">
              {email}
            </Link>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-link text-white-50"
              onClick={() => Logout()}
            >
              Logout
            </button>
          </li>
        </ul>
      );
    }

    if (!token && active == "home") {
      return (
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item  ">
            <Link to="/login" className="nav-link ">
              My Garden{" "}
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/login" className="nav-link ">
              Login{" "}
            </Link>
          </li>
          <li className="nav-item  ">
            <Link to="/registration" className="nav-link ">
              Register{" "}
            </Link>
          </li>
        </ul>
      );
    }

    if (!token && active == "login") {
      return (
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item  ">
            <Link to="/login" className="nav-link ">
              My Garden{" "}
            </Link>
          </li>

          <li className="nav-item active bg-success ">
            <Link to="/login" className="nav-link ">
              Login{" "}
            </Link>
          </li>
          <li className="nav-item  ">
            <Link to="/registration" className="nav-link ">
              Register{" "}
            </Link>
          </li>
        </ul>
      );
    }

    if (!token && active == "register") {
      return (
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item  ">
            <Link to="/login" className="nav-link ">
              My Garden{" "}
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/login" className="nav-link ">
              Login{" "}
            </Link>
          </li>
          <li className="nav-item active bg-success  ">
            <Link to="/registration" className="nav-link ">
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
