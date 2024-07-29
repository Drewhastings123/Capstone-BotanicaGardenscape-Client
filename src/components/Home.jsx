import mag3Url from "../assets/homePage/MagnoliaMulti.jpg";
import solarGnome from "../assets/homePage/solarGnome.png";

import loadReference from "./reference.js";

export default function Home() {
  window.sessionStorage.setItem("active_item", "home");

  loadReference();

  return (
    <>
      <div className="container gridHome">
        <div className="homeH1">
          <h1>Welcome to Botanica Gardenscape</h1>
          <h5>User our handy layout tool and plot your dream garden. </h5>
          <h6>
            Please register to access our full functionality and begin designing
            today{" "}
          </h6>
        </div>
        <div className="homeImgPlaceTopRight">
          <img
            className="homeImg"
            src={mag3Url}
            alt="Magnolia In Sunlight"
          ></img>
        </div>

        <div className="homeBlockQt1 text-info">
          <figure>
            <blockquote className="blockquote ">
              <p className="mb-0">
                “The one who plants trees, knowing that they will never sit in
                their shade, has at least started to understand the meaning of
                life.”
              </p>
            </blockquote>
          </figure>
        </div>

        <div className="homeBlockQt2 text-info">
          <figure>
            <blockquote className="blockquote ">
              <p className="mb-0">
                The glory of gardening: hands in the dirt, head in the sun,
                heart with nature. To nurture a garden is to feed not just the
                body, but the soul.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">Alfred Austin</figcaption>
          </figure>
        </div>

        <div className="homeBlockQt3 text-info">
          <figure>
            <blockquote className="blockquote ">
              <p className="mb-0">
                Trees and plants always look like the people they live with,
                somehow.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Zora Neale Hurston
            </figcaption>
          </figure>
        </div>

        <div className="homeImgPlaceLowerLeft">
          <img className="homeImg" src={solarGnome} alt="Gnome"></img>
        </div>

        <div className="homeHelpfulLinks">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="row">Resources - Helpful Links</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success homeTr">
                <td>
                  <a href="https://wfoplantlist.org/">
                    The World Flora Online (WFO) Plant List
                  </a>
                </td>
              </tr>
              <tr className="table-success">
                <td>
                  <a href="https://www.farmersalmanac.com/farmers-almanac-summer-2024-weather-forecast">
                    Farmers' Almanac Summer Weather Forecast 2024
                  </a>
                </td>
              </tr>
              <tr className="table-success">
                <td>
                  <a href="https://extension.colostate.edu">
                    Colorado State University Extension
                  </a>
                </td>
              </tr>
              <tr className="table-success">
                <td>
                  <a href="https://www.nevadaaudubon.org/native-gardening/10-native-plants-for-your-nevada-garden">
                    Nevada Audubon Organization - 10 Native Plants for your
                    Garden
                  </a>
                </td>
              </tr>
              <tr className="table-success">
                <td>
                  <a href="https://extension.uga.edu/publications/detail.html?number=B625">
                    University of Georgia Extension - Landscape Plants for
                    Georgia
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  {
    /* {
              <SelectList
                theList={zoneList}
                theListName="Zone"
                theParentForm="Home"
                theFieldName="zone_name"
                the2FieldName="temp_range"
              />
            } */
  }
}
