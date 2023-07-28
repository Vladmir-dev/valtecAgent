import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
// import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
import FieldJobs from "./components/fieldjobs/FieldJobs";
import SingleJob from "./components/singleJob/SingleJob";
import ProtectedRoute from "./ProtectedRoute";
// import { Provider } from "react-redux";
// import store from "./features/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistedStore } from "./features/store";
import { useSelector } from "react-redux";
import SignUp from "./pages/signup/SignUp";

// import "./App.css";

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  const isAuthenticated = useSelector((state) => state.user.token);

  console.log("is authenticated", isAuthenticated);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard">
              <Route index element={<Home />} />

              <Route path="users">
                <Route index element={<List type="user" />} />
                <Route path=":userId" element={<Single type="user" />} />
                <Route
                  path="new"
                  element={
                    <New inputs={userInputs} type="user" title="Add New User" />
                  }
                />
              </Route>

              <Route path="products">
                <Route index element={<List type="job" />} />
                <Route path=":productId" element={<Single type="job" />} />
                <Route
                  path="new"
                  element={
                    <New
                      inputs={productInputs}
                      type="job"
                      title="Add New Job"
                    />
                  }
                />
              </Route>

              <Route path="jobs">
                <Route index element={<FieldJobs />} />
                <Route path=":jobID" element={<SingleJob />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="users">
        <Route index element={<List type="user" />} />
        <Route path=":userId" element={<Single type="user" />} />
        <Route
          path="new"
          element={<New inputs={userInputs} type="user" title="Add New User" />}
        />
      </Route>

      <Route path="products">
        <Route index element={<List type="job" />} />
        <Route path=":productId" element={<Single type="job" />} />
        <Route
          path="new"
          element={
            <New inputs={productInputs} type="job" title="Add New Job" />
          }
        />
      </Route>

      <Route path="jobs">
        <Route index element={<FieldJobs />} />
        <Route path="/:jobID" element={<SingleJob />} />
      </Route>
    </Routes>
  );
};

const DashboardNestedRoutes = ({ type, inputs }) => {
  return (
    <Outlet>
      <Route index element={<List type={type} />} />
      <Route path=":id" element={<Single type={type} />} />
      <Route
        path="new"
        element={<New inputs={inputs} type={type} title={`Add New ${type}`} />}
      />
    </Outlet>
  );
};

export default App;
