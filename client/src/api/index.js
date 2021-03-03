import axios from "axios";

export const addProduct = productData => {
  console.log(productData)
  port.post('/api/product/add', productData).then((err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log('index.jsf', data)
    }
  })
}

const port = axios.create({
  baseURL: "http://localhost:8080",

})