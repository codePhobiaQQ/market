import slide1 from '../../img/product/1.jpg'
import slide2 from '../../img/product/2.jpg'
import slide3 from '../../img/product/3.jpg'
import slide4 from '../../img/product/4.jpg'
import slide5 from '../../img/product/5.jpg'
import slide6 from '../../img/product/6.jpg'
import {FETCH_LATEST_PRODUCTS, HIDE_LOADER} from "../types";


const initialState = {
  slides: [
    {
      img: `${slide1}`,
      title: 'Flamboyant Pink Top',
      price: '35$',
      amount: '10'
    },
    {
      img: `${slide2}`,
      title: 'Flamboyant Pink Top',
      price: '35$',
      amount: '10'
    },
    {
      img: `${slide3}`,
      title: 'Flamboyant Pink Top',
      price: '35$',
      amount: '10'
    },{
      img: `${slide4}`,
      title: 'Flamboyant Pink Top',
      price: '35$',
      amount: '10'
    },
    {
      img: `${slide5}`,
      title: 'Flamboyant Pink Top',
      price: '35$',
      amount: '10'
    },
    {
      img: `${slide6}`,
      title: 'Flamboyant Pink Top',
      price: '35$',
      amount: '10'
    },
  ],
  settings: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'LatestProducts',
  },
  loading: true
}

export const LatestProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_PRODUCTS:
      // return {...state, slides: action.payload}
      return {...state}
    case HIDE_LOADER:
      return {...state, loading: false}
    default: return state
  }
}