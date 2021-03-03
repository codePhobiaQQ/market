import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToCard, toggleAlert} from "../../../redux/actions";
// import classes from './LikeBuy.module.sass'

const LikeBuy = props => {

  const cardInfo = useSelector(state => state.CardReducer)
  const dispatch = useDispatch()


  const clickAddCard = (event) => {
    event.preventDefault()
    dispatch(addToCard(props))
    dispatch(toggleAlert('Товар был добавлен в корзину'))
  }

  return (
    <div className="pi-links">
      <a onClick={event => {clickAddCard(event)}} href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
      <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
    </div>
  );
};

export default LikeBuy;