const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = config.get('port') || 8080
const app = express()

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/api/create', require('./routes/addProduct.routes.js'))


async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) })

  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()


