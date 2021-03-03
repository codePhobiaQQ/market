import React from 'react'
import logo from "../../../img/logo.png";
import CardButton from "./CardButton/CardButton";
import {useDispatch, useSelector} from "react-redux";
import {shawSingIn, shawSingUp} from "../../../redux/actions";
// import classes from './HeaderTop.module.sass'

const HeaderTop = props => {

  const dispatch = useDispatch()

  const SingInHandler = (event) => {
    event.preventDefault()
    dispatch(shawSingIn())
  }
  const SingUpHandler = (event) => {
    event.preventDefault()
    dispatch(shawSingUp())
  }

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
                <a href="#" onClick={(event) => SingInHandler(event)}>Sign</a> In or <a href="#" onClick={(event) => SingUpHandler(event)}>Create Account</a>
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