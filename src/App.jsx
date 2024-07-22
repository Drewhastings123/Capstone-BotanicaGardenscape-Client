import { Routes, Route, Link } from "react-router-dom";
import store from "./app/store.js";
import { Provider } from "react-redux";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration";
import Garden from "./components/Garden";
import Protected from "./components/Protected.jsx";

// uncomment home page
function App() {
  window.sessionStorage.setItem("active_item", "home");

  return (
    <Provider store={store}>
      <div>
        <Routes>
          {/* <Route
            path="/garden"
            element={<Protected />}
           > */}
          <Route path="/garden" element={<Garden />}></Route>

          {/* </Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
