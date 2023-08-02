import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthFooter = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='copy'>
      © {currentYear}{" "}
      <Link to='https://wijegoonawardana.com'>wijegoonawardana.com</Link>
    </div>
  );
};

AuthFooter.propTypes = {};

export default AuthFooter;
