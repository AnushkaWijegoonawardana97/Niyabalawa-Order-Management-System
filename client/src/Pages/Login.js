import React from "react";
import PropTypes from "prop-types";
import Auth from "../Layouts/Auth";
import AuthBgFigure from "../Components/Auth/AuthBgFigure";
import loginBg from "../img/logo_sticky.svg";
import AuthFooter from "../Components/Auth/AuthFooter";

const Login = (props) => {
  const loginAlt = "Login Background";
  return (
    <Auth>
      <aside>
        <AuthBgFigure bgImage={loginBg} imageAlt={loginAlt} url={"/"} />
        <div className='access_social'>
          <a href='#0' className='social_bt google'>
            Login with Google
          </a>
        </div>
        <div className='divider'>
          <span>Or</span>
        </div>
        <form autocomplete='off'>
          <div className='form-group'>
            <input
              type='email'
              name=''
              id='Email'
              placeholder='Email'
              className='form-control'
            />
            <i className='icon_mail_alt'></i>
          </div>
          <div className='form-group'>
            <input
              type='password'
              name=''
              id='Password'
              placeholder='Password'
              className='form-control'
            />
            <i className='icon_lock_alt'></i>
          </div>
          <div className='clearfix add_bottom_15'>
            <div className='checkboxes float-start'>
              <label className='container_check'>
                Remember me
                <input type='checkbox' name='' id='' />
                <span className='checkmark'></span>
              </label>
            </div>
            <div className='float-end'>
              <a id='forgot' href='#0'>
                Forgot Password?
              </a>
            </div>
          </div>
          <a href='#0' className='btn_1 gradient full-width'>
            Login Now!
          </a>
          <div className='text-center mt-2'>
            <small>
              Don't have an customer acccount?{" "}
              <strong>
                <a href=''>Sign Up</a>
              </strong>
            </small>
          </div>
        </form>
        <AuthFooter />
      </aside>
    </Auth>
  );
};

Login.propTypes = {};

export default Login;
