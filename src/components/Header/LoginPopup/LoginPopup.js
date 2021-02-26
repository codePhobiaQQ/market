import React, {useEffect, useRef} from 'react'
import classes from './LoginPopup.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {HIDE_SING_IN} from "../../../redux/types";
import {hideSingIn} from "../../../redux/actions";

const LoginPopup = props => {

  const ref = useRef()
  const dispatch = useDispatch()

  const clickHandler = (event) => {
    !event.path.includes(ref.current) && dispatch(hideSingIn())
  }

  useEffect(() => {
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  return (
    // <div ref={refHelper} className={classes.wrapperForm}>
      <form ref={ref} className={classes.form}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    // </div>
  );
};

export default LoginPopup;