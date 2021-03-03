import React, {useEffect, useRef} from 'react'
import classes from './SingUpPopup.module.sass'
import {hideSingUp} from "../../../redux/actions";
import {useDispatch} from "react-redux";

const SingUpPopup = props => {

  const ref = useRef()
  const dispatch = useDispatch()

  const clickHandler = (event) => {
    !event.path.includes(ref.current) && dispatch(hideSingUp())
  }

  useEffect(() => {
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  return (
    <form ref={ref} className={classes.singUpForm}>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputName" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPasswordRepeat" className="form-label">Repeat Password</label>
        <input type="password" className="form-control" id="exampleInputPasswordRepeat" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SingUpPopup;