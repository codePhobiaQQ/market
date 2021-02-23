import React, {useEffect, useRef} from 'react'
import classes from './CardPopup.css'
import {useDispatch, useSelector} from "react-redux";
import {closeCardPopup} from "../../../../../redux/actions";

const CardPopup = props => {

  const dispatch = useDispatch()
  const test = useSelector(state => state.CardReducer.isOpened)

  const clickHandler = (event) => {
    console.log('cliced ivent')
    !event.path.includes(popupTarget.current) && dispatch(closeCardPopup())
  }

  const popupTarget = useRef()

  useEffect(() => {
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
      console.log('END')
    }
  }, [test])

  return (
    <div ref={popupTarget} className="CardPopup">

      {props.products.length
        ? props.products.map((product, index) => {
            return (
              <div key={index} className='cardProduct'>
                <img src={product.img} alt=""/>
                <div>
                  <h3>{product.title}</h3>
                  <span>{product.price}</span>
                  <span>Количество: 1</span>
                </div>
                <div className='productActionWrapper'>
                  <div className='plusProduct'>+</div>
                  <div className='minusProduct'>-</div>
                </div>
              </div>
            )
          })
        : "Корзина пока пуста"
      }


    </div>
  );
};

export default CardPopup;