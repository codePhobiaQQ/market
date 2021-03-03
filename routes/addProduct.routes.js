const addProduct = require("../controllers/addProduct");

const {Router} = require('express')
const Product = require('../modelMongoose/product')
const router = Router()

// /api/create/add
router.post('/add', async (req, res) => {
  try {
    const {title, price} = req.body
    const candidate = await Product.findOne({ title })
    if (candidate) {
      return res.status(400).json({message: "Такой товар уже существует"})
    }
    const product = new Product({ title, price })
    await product.save()
    res.status(201).json( {message: "Продукт был создан"} )
    console.log("Продукт был создан")
  } catch (e) {
    res.status(500).json({message: "Что-то пошло не так, попробуйте снова1"})
  }
})


router.get('/take', async (req, res) => {
  try {
    const card = await Product.find({})
    console.log('card find')
    res.json(card)
  } catch (e) {
    res.status(500).json({message: "Что-то пошло не так, попробуйте снова1"})
  }
})

module.exports = router