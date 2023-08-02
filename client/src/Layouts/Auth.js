import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/order-sign_up.css";

const Auth = ({ children }) => {
  return (
    <div id='register_bg'>
      <div id='register'>{children}</div>
    </div>
  );
};

Auth.propTypes = {};

export default Auth;
