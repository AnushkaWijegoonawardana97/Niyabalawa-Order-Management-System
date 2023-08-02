import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Layouts/Dashboard";

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<p>Website</p>} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />

        {/* <Route path='/dashboard/' element={<p>Dashboard</p>}>
          <Route index element={<p>Dashboard - Main Page</p>} />
          <Route path='login' element={<p>Login</p>} />
          <Route path='customer' element={<p>customer</p>} />
        </Route> */}
        <Route path='*' element={<p>Not thing</p>} />
      </Routes>
    </div>
  );
};

App.propTypes = {};

export default App;
