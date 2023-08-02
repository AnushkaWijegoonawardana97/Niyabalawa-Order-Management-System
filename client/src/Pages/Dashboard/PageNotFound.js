import React from "react";
import PropTypes from "prop-types";
import "../../css/error.css";
import errorImage from "../../img/404.svg";

const PageNotFound = (props) => {
  return (
    <main class='bg_gray'>
      <div id='error_page'>
        <div class='container'>
          <div class='row justify-content-center text-center'>
            <div class='col-xl-7 col-lg-9'>
              <figure>
                <img
                  src={errorImage}
                  alt=''
                  class='img-fluid'
                  width='550'
                  height='234'
                />
              </figure>
              <p>
                We're sorry, but the page you were looking for doesn't exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

PageNotFound.propTypes = {};

export default PageNotFound;
