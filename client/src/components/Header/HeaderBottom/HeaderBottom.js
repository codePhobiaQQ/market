import React from 'react'
import {NavLink} from 'react-router-dom'
// import classes from './HeaderBottom.module.sass'

const HeaderBottom = props => {
  return (
    <nav className="main-navbar">
      <div className="container">
        <ul className="main-menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/women">Women</NavLink></li>
          <li><NavLink to="/men">Men</NavLink></li>
          <li><NavLink to="/Jewelry">Jewelry
            <span className="new">New</span>
          </NavLink></li>
          <li><a href="#">Shoes</a>
            <ul className="sub-menu">
              <li><NavLink to="#">Sneakers</NavLink></li>
              <li><NavLink to="#">Sandals</NavLink></li>
              <li><NavLink to="#">Formal Shoes</NavLink></li>
              <li><NavLink to="#">Boots</NavLink></li>
              <li><NavLink to="#">Flip Flops</NavLink></li>
            </ul>
          </li>
          <li><a href="#">Pages</a>
            <ul className="sub-menu">
              <li><NavLink to="./product.html">Product Page</NavLink></li>
              <li><NavLink to="./category.html">Category Page</NavLink></li>
              <li><NavLink to="./cart.html">Cart Page</NavLink></li>
              <li><NavLink to="./checkout.html">Checkout Page</NavLink></li>
              <li><NavLink to="./contact.html">Contact Page</NavLink></li>
            </ul>
          </li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderBottom;