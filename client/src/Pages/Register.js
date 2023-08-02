import React from "react";
import PropTypes from "prop-types";
import Auth from "../Layouts/Auth";
import registerBg from "../img/logo_sticky.svg";
import AuthBgFigure from "../Components/Auth/AuthBgFigure";
import AuthFooter from "../Components/Auth/AuthFooter";
import { Link } from "react-router-dom";

const Register = (props) => {
  const registerAlt = "Login Background";

  return (
    <Auth>
      <aside>
        <AuthBgFigure bgImage={registerBg} imageAlt={registerAlt} url={"/"} />
        <div className='access_social'>
          <a href='#0' className='social_bt google'>
            Register with Google
          </a>
        </div>
        <div className='divider'>
          <span>Or</span>
        </div>
        <form autocomplete='off'>
          <div className='form-group'>
            <input
              type='text'
              name=''
              id=''
              className='form-control'
              placeholder='Name'
            />
            <i className='icon_pencil-edit'></i>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name=''
              id=''
              className='form-control'
              placeholder='Last Name'
            />
            <i className='icon_pencil-edit'></i>
          </div>
          <div className='form-group'>
            <input
              type='email'
              name=''
              id=''
              className='form-control'
              placeholder='Email'
            />
            <i className='icon_mail_alt'></i>
          </div>
          <div className='form-group'>
            <input
              type='password'
              name=''
              id='password1'
              className='form-control'
              placeholder='Password'
            />
            <i className='icon_lock_alt'></i>
          </div>
          <div className='form-group'>
            <input
              type='password'
              name=''
              id='password2'
              className='form-control'
              placeholder='Confirm Password'
            />
            <i className='icon_lock_alt'></i>
          </div>
          <div id='pass-info' className='clearfix'></div>
          <a href='#0' className='btn_1 gradient full-width'>
            Register Now!
          </a>
          <div className='text-center mt-2'>
            <small>
              Already have a customer acccount?{" "}
              <strong>
                <Link to='/login'>Sign In</Link>
              </strong>
            </small>
          </div>
        </form>
        <AuthFooter />
      </aside>
    </Auth>
  );
};

Register.propTypes = {};

export default Register;
