import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Layouts/Dashboard";
import PageNotFound from "./Pages/Dashboard/PageNotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<p>Website</p>} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

App.propTypes = {};

export default App;
