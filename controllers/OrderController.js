const Order = require('../models/Order');
const Category = require('../models/Category');
const Product = require('../models/Product');
const {
    faker
} = require('@faker-js/faker');

const importData = (req, res) => {
    for (let i = 0; i < 10; i++) {
        Product.count().exec(function (err, count) {
            var random = Math.floor(Math.random() * count)
            Product.findOne().skip(random).exec(
                function (err, result) {
                    const order = new Order({
                        customerName: faker.internet.email(),
                        customerEmail: faker.internet.email(),
                        customerPhone: Math.floor(Math.random() * 1000000000),
                        address: faker.address.streetAddress(),
                        amount: Math.floor(Math.random() * 10000),
                        items: [{
                            item: result._id,
                            qty: Math.floor(Math.random() * 10)
                        }, ]
                    });

                    order.save()
                })
        })
    }
    res.json({
        msg: "Added"
    })
}

const all = (req, res) => {
    Order.find()
        .populate('items.item')
        .then((result) => {
            res.json(result)

        }).catch((err) => {
            res.json(err)

        });
}
const detail = (req, res) => {
    const order = Order.findById(req.params.id)
        .populate('items.item')
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)

        });
}
const add = (req, res) => {
    const order = new Order(req.body)

    order.save().then(async (result) => {
        await res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const edit = (req, res) => {
    const order = Order.findByIdAndUpdate(req.params.id, req.body).then(async (result) => {
        await Category.findByIdAndUpdate(result.category, {
            $push: {
                orders: result._id
            }
        })

        await res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const remove = (req, res) => {
    const order = Order.findByIdAndDelete(req.params.id).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}

const removeAll = (req, res) => {
    Order.deleteMany()
        .then((result) => {
            res.json({
                msg: "Deleted All"
            })
        }).catch((err) => {
            res.json(err)

        });
}

module.exports = {
    all,
    detail,
    importData,
    add,
    edit,
    remove,
    removeAll
}