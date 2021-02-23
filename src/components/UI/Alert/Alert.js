import React from 'react'
import classes from './Alert.css'
import {useSelector} from "react-redux";

const Alert = props => {

  const alertText = useSelector(state => state.GlobalElementsReducer.alertPopup)

  return (
    <div className='alertPopup'>
      {alertText.text}
    </div>
  );
};

export default Alert;