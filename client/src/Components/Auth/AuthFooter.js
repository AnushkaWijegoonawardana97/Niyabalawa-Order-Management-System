import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { COPY_RIGHT_TEXT, COPY_RIGHT_URL } from "../../config/constant";

const AuthFooter = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='copy'>
      © {currentYear} <Link to={COPY_RIGHT_URL}>{COPY_RIGHT_TEXT}</Link>
    </div>
  );
};

AuthFooter.propTypes = {};

export default AuthFooter;
