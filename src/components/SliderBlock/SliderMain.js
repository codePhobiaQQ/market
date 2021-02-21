import React, { Component } from 'react';
import Slider from "react-slick";
import img1 from '../../img/bg.jpg'
import img2 from '../../img/bg-2.jpg'
import classes from './SliderMain.css'
import {useSelector} from "react-redux";

export default function SliderMain() {

  const slide = useSelector((state) => state.sliderFirst)
  console.log(slide)


  return (
    <Slider {...slide.settings}>
      {slide.slides.map((slide, index) => {
        return (
          <div key={index} className='wrapperSlide'>
            <img src={slide.img} alt="index"/>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button className="site-btn">Подробнее</button>
          </div>
        )
      })}
    </Slider>
  );
}
