import React, {useEffect} from 'react'
import {useSelector} from "react-redux";

const HideOverflow = props => {

  const GlobalState = useSelector(state => state.GlobalElementsReducer)

  useEffect(() => {
    if (GlobalState.singInPopup.visible || GlobalState.logInPopup.visible) {
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('body').style.overflow = 'visible'
    }
  }, [GlobalState.logInPopup.visible, GlobalState.singInPopup.visible])

  return null;
};

export default HideOverflow;