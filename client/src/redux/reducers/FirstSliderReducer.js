import slide1 from '../../img/bg.jpg'
import slide2 from '../../img/bg-2.jpg'

const initialState = {
  slides: [
    {
      title: 'Огромные Скидки',
      subtitle: 'Заходите скорее',
      img: `${slide1}`
    },{
      title: 'Большой Выбор Товаров',
      subtitle: 'Заходите скорее',
      img: `${slide2}`
    },
  ],
  settings: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'mainSlider',
  }
}

export const FirstSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}
