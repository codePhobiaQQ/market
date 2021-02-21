import React, { Component } from 'react';
import Slider from "react-slick";
import img1 from '../../img/bg.jpg'
import img2 from '../../img/bg-2.jpg'
import classes from './SliderMain.css'

export default function SliderMain() {
  console.log(classes)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'mainSlider'
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt=""/>
      </div>
      <div>
        <img src={img2} alt=""/>
      </div>
    </Slider>
  );
}
