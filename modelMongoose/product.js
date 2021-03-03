const {Schema, model} = require('mongoose')

const productSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  img: {
    type: String,
    require: true
  },
  // id: {
  //   type: String,
  //   require: true
  // }
})

module.exports = model('Product', productSchema)