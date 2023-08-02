import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthBgFigure = ({ bgImage, imageAlt, url }) => {
  return (
    <div>
      <figure>
        <Link to={url}>
          <img src={bgImage} alt={imageAlt} width={140} height={35} />
        </Link>
      </figure>
    </div>
  );
};

AuthBgFigure.propTypes = {};

export default AuthBgFigure;
