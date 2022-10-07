const mongoose = require('mongoose');
require('dotenv/config')

module.exports = () => {
    mongoose.connect(
        process.env.DB_CONNECT,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        () => {
            console.log('Connect to DB');
        }
    )
}