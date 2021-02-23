import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {openCardPopup} from "../../../../redux/actions";
import CardPopup from "./CardPopup/CardPopup";
// import classes from './CardButton.module.sass'

const CardButton = props => {

  const infoCard = useSelector(state => state.CardReducer)
  const dispatch = useDispatch()

  const openPopupHandler = () => {
    !infoCard.isOpened && dispatch(openCardPopup())
  }

  return (
    <div onClick={() => openPopupHandler()} className="up-item">
      <div className="shopping-card">
        <i className="flaticon-bag"></i>
        <span>{infoCard.amount}</span>
      </div>
      <a href="#">Shopping Cart</a>
      { infoCard.isOpened &&
      <CardPopup
        products={infoCard.products}
      /> }

    </div>
  );
};

export default CardButton;