import React from 'react'
// import classes from './HomePage.module.sass'
import Header from "../Header/Header";
import SliderMain from "./SliderBlock/SliderMain";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import LatestProducts from "./LatestProducts/LatestProducts";

const HomePage = props => {
  return (
    <>
      <SliderMain />
      <FeaturesSection />
      <LatestProducts />
    </>
  );
};

export default HomePage;