import { Routes, Route, Link } from "react-router-dom";
import store from "./app/store.js";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Garden from "./components/Garden";
import User from "./components/User";
import { useState } from "react";
import Protected from "./components/Protected.jsx";

// uncomment home page
function App() {
  window.sessionStorage.setItem("active_item", "home");
  const [shape, setShape] = useState("sq");

  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/user" element={<Protected />}>
            <Route path="/user" element={<User />}></Route>
            </Route>
            <Route path="/garden" element={<Protected />}>
            <Route
              path="/garden"
              element={<Garden shape={shape} setShape={setShape} />}
            ></Route>
          </Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
