import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { COPY_RIGHT_TEXT, COPY_RIGHT_URL } from "../../config/constant";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='sticky-footer'>
      <div className='container'>
        <div className='text-center'>
          <small>
            Copyright © <Link to={COPY_RIGHT_URL}>{COPY_RIGHT_TEXT}</Link>{" "}
            {currentYear}
          </small>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
