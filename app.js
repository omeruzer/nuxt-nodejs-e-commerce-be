const express = require('express');
const app = express()
require('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors())

// db
const db = require('./helpers/db')()

// config
const config = require('./helpers/config');
app.set('api_secret_key', config.api_secret_key)

app.use(bodyParser.json())

const user = require('./routes/user')
const product = require('./routes/product')
const category = require('./routes/category')
const order = require('./routes/order')
const faq = require('./routes/faq')



app.use('/api/auth', user)
app.use('/api/product', product)
app.use('/api/category', category)
app.use('/api/order', order)
app.use('/api/faq', faq)



app.listen(process.env.PORT, () => {
    console.log(`Listening to ${process.env.PORT}`);
})