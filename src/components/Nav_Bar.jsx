import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav_Bar() {
  const token = window.sessionStorage.getItem("Token");

  const navigate = useNavigate();

  function Logout() {
    window.sessionStorage.removeItem("Token");
    navigate("/login");
  }

  // set up the links to show which is active
  // TODO - get it to work...
  // document.querySelectorAll(".nav-link").forEach((link) => {
  //   if (link.href === window.location.href) {
  //     link.classList.add("active");
  //     link.setAttribute("aria-current", "page");
  //     console.log("set active link");
  //   } else {
  //     link.classList.remove("active");
  //     console.log("set inactive link");
  //   }
  // });

  return (
    <>
      <nav className="navbar navbar-expand-md  bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="material-symbols-outlined">yard</span>
          <a
            className="navbar-brand active bg-success"
            aria-current="page"
            href="/"
          >
            Botanica Gardenscape
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto ">
              {!token && (
                <div className="navalign">
                  <li className="nav-item ">
                    <Link to="/login" className="nav-link ">
                      Login{" "}
                    </Link>
                  </li>{" "}
                </div>
              )}
              {!token && (
                <div className="navalign">
                  <li className="nav-item">
                    <Link to="/registration" className="nav-link ">
                      Register{" "}
                    </Link>
                  </li>
                </div>
              )}

              {token && (
                <div className="navalign">
                  <li className="nav-item">
                    <Link to="/garden" className="nav-link ">
                      My Garden{" "}
                    </Link>
                  </li>
                </div>
              )}
              {token && (
                <div className="navalign">
                  <li className="nav-item">
                    <Link to="/user" className="nav-link ">
                      User Info
                    </Link>
                  </li>
                </div>
              )}
              {token && (
                <div className="navalign">
                  <li className="nav-item logout ">
                    <button
                      type="button"
                      className="btn btn-link text-white-50 pt1 "
                      onClick={() => Logout()}
                    >
                      Logout
                    </button>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
