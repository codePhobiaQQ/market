import React from 'react'
import logo from '../../img/logo.png'
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";
// import classes from './Header.module.sass'

const Header = props => {
  return (
    <header className="header-section">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;