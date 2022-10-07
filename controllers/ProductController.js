const Product = require('../models/Product');
const Category = require('../models/Category');

const all = (req, res) => {
    Product.find()
        .populate({
            path: 'category',
            select: 'name'
        })
        .then((result) => {
            res.json(result)

        }).catch((err) => {
            res.json(err)

        });
}
const detail = (req, res) => {
    const product = Product.findById(req.params.id)
        .populate({
            path: 'category',
            select: 'name'
        })

    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const add = (req, res) => {
    const product = new Product(req.body)

    product.save().then(async(result) => {
        await Category.findByIdAndUpdate(result.category, {
            $push: {
                products: result._id
            }
        })
        await res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const edit = (req, res) => {
    const product = Product.findByIdAndUpdate(req.params.id, req.body).then(async(result) => {

        await Category.findByIdAndUpdate(result.category, {
            $pull: {
                products: result._id,
            },
        })
        await Category.findByIdAndUpdate(req.body.category, {
            $push: {
                products: result._id
            },
        })

        await res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const remove = (req, res) => {
    const product = Product.findByIdAndDelete(req.params.id).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}

const removeAll = (req, res) => {
    Product.deleteMany()
        .then((result) => {
            res.json({
                msg: "Deleted All"
            })
        }).catch((err) => {
            res.json(err)

        });
}

const bestSeller = (req, res) => {
    Product.find().limit(4)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)

        });
}
const newProduct = (req, res) => {
    Product.find().limit(4)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)

        });
}

const search = (req, res) => {
    Product.find()
        .then(async(result) => {
            const data = await result.filter(item => item.name.toString().toLowerCase().includes(req.query.q))
            await res.json(data)
        }).catch((err) => {
            res.json(err)

        });
}

module.exports = {
    all,
    detail,
    add,
    edit,
    newProduct,
    bestSeller,
    search,
    remove,
    removeAll
}