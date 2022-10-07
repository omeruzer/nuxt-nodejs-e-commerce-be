const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config')
const login = (req, res) => {
    const {
        email,
        password
    } = req.body
    User.findOne({
        email
    }, (err, user) => {
        if (err) {
            res.json(err)
        }
        if (!user) {
            res.json({
                message: 'User Not Found'
            })
        } else {
            bcrypt.compare(password, user.password).then((result) => {
                if (!result) {
                    res.json({
                        message: 'username or password is incorrect'
                    })
                } else {
                    const id = user._id
                    const payload = {
                        user
                    }

                    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)
                    res.json({
                        id,
                        token
                    })
                }
            }).catch((err) => {

            });
        }
    })
}
const register = (req, res) => {

    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            isAdmin: req.body.isAdmin,
            password: hash,
        })
        user.save().then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)

        });
    })

}

const user = (req, res) => {
    res.json({
        _id: req.user.id,
        name: req.user.name,
        surname: req.user.surname,
        email: req.user.email,
        isAdmin: req.user.isAdmin,
        city: req.user.city,
        state: req.user.state,
        address: req.user.address,
        phone: req.user.phone,
    })
}

const userAll = (req, res) => {
    const users = User.find().then((result) => {
        res.json(result)
    }).catch((err) => {

    });
}

const userUpdate = (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const userPassword = (req,res)=>{
    
}

module.exports = {
    login,
    register,
    userAll,
    user,
    userPassword,
    userUpdate
}