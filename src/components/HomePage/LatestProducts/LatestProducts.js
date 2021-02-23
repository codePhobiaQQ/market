import React, {useRef} from 'react'
import Slider from "react-slick";
import {useSelector} from "react-redux";
import classes from './LatestProducts.css'
import LikeBuy from "../../UI/LikeBuy/LikeBuy";

const LatestProducts = props => {

  const stateProducts = useSelector(state => state.LatestProductsReducer)

  const LatestProductRef = useRef()

  console.log(LatestProductRef)

  const clickSLiderButton = (type) => {
    type == 'prev'
      ? LatestProductRef.current.slickPrev()
      : LatestProductRef.current.slickNext()
  }

  return (
    <section className="top-letest-product-section">
      <div className="container">
        <div className="section-title">
          <h2>LATEST PRODUCTS</h2>
        </div>

        <button onClick={() => clickSLiderButton('prev')} className="LatestProductPrev LatestProductBtn owl-prev"><i className="flaticon-left-arrow-1"></i></button>
        <button onClick={() => clickSLiderButton('next')} className="LatestProductNext LatestProductBtn owl-next"><i className="flaticon-left-arrow-1"></i></button>

        <Slider ref={LatestProductRef} {...stateProducts.settings}>
          {stateProducts.slides.map((slide, index) => {

            if (slide.amount > 0) {
              return (
                <div key={index} className="product-item">
                  <div className="pi-pic">
                    <img src={slide.img} alt=""/>
                    <LikeBuy props={slide}/>
                  </div>
                  <div className="pi-text">
                    <h6>{slide.price}</h6>
                    <p>{slide.title}</p>
                  </div>
                </div>
              )
            } else return null

          })}
        </Slider>
      </div>
    </section>
  );
};

export default LatestProducts;