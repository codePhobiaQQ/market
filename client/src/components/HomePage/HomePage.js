import React from 'react'
// import classes from './HomePage.module.sass'
import Header from "../Header/Header";
import SliderMain from "./SliderBlock/SliderMain";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import LatestProducts from "./LatestProducts/LatestProducts";
import ProductsCategories from "./ProductsCategories/ProductsCategories";

const HomePage = props => {
  return (
    <>
      <SliderMain />
      <FeaturesSection />
      <LatestProducts />
      <ProductsCategories />
    </>
  );
};

export default HomePage;