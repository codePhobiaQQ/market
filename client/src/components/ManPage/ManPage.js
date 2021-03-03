import React, {useState} from 'react'
import Header from "../Header/Header";
import classes from "../Header/SingUpPopup/SingUpPopup.module.sass";
import {useHttp} from "../../hooks/http.hook";
// import classes from './ManPage.module.sass'

const ManPage = props => {

  const {loading, request} = useHttp()

  const [form, setForm] = useState({
    title: '', price: ''
  })

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const addProductHandler = async () => {
    try {
      const data = await request('/api/create/add', 'POST', {...form})
    } catch (e) {}
  }

  const takeProductHandler = async () => {
    try {
      const data = await request('/api/create/take', 'GET', {})
      return data
    } catch (e) {}
  }

  return (
    <div>
      <h1>ManPage</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">Title</label>
          <input onChange={changeHandler} type="text" name="title" className="form-control" id="exampleInputTitle" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPrice" className="form-label">price</label>
          <input onChange={changeHandler} type="text" name="price" className="form-control" id="exampleInputPrice" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputImage" className="form-label">image</label>
          <input type="text" name="img" className="form-control" id="exampleInputImage" />
        </div>
        <button disabled={loading} onClick={addProductHandler} type="submit" className="btn btn-primary">Submit</button>
        <button disabled={loading} onClick={takeProductHandler} type="submit" className="btn btn-primary">Take</button>

    </div>
  );
};

export default ManPage;