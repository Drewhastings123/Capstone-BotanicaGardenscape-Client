import { Routes, Route } from "react-router-dom";
import store from "./app/store.js";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import User from "./components/User";
import Protected from "./components/Protected.jsx";
import Nav_Bar from "./components/Nav_Bar.jsx";
import Garden_model from "./components/Garden_model";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav_Bar />

        <Routes>
          <Route path="/user/" element={<Protected />}>
            <Route path="/user/" element={<User />}></Route>
          </Route>
          <Route path="/garden" element={<Protected />}>
            <Route path="/garden" element={<Garden_model />}></Route>
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
