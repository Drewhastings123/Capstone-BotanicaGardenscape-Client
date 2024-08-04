import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav_Bar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container-fluid">
        <span className="material-symbols-outlined">yard</span>

        <NavLink to="/" className="navbar-brand ">
          Botanica Gardenscape
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink to="/login" className="nav-link ">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registration" className="nav-link ">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/garden" className="nav-link ">
                My Garden
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
