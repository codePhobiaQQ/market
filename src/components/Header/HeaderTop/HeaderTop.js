import React from 'react'
import logo from "../../../img/logo.png";
import CardButton from "./CardButton/CardButton";
// import classes from './HeaderTop.module.sass'

const HeaderTop = props => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 text-center text-lg-left">
            <a href="/" className="site-logo">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="col-xl-6 col-lg-5">
            <form className="header-search-form">
              <input type="text" placeholder="Search on divisima ...." />
              <button><i className="flaticon-search"></i></button>
            </form>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="user-panel">
              <div className="up-item">
                <i className="flaticon-profile"></i>
                <a href="#">Sign</a> In or <a href="#">Create Account</a>
              </div>
              <CardButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;