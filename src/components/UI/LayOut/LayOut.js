import React from 'react'
import classes from './LayOut.module.sass'

const LayOut = props => {
  return (
    <div className={classes.LayOut}>
      <div className={classes.close}>
        <i className='fa fa-times'></i>
      </div>
      {props.children}
    </div>
  );
};

export default LayOut;