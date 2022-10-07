const Category = require('../models/Category');

const all = (req, res) => {
    Category.find().select('_id name')
        // .populate('products')
        .then((result) => {
            res.json(result)

        }).catch((err) => {
            res.json(err)

        });
}
const detail = (req, res) => {
    const category = Category.findById(req.params.id)
        .populate('products')

    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const add = (req, res) => {
    const category = new Category(req.body)

    category.save().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const edit = (req, res) => {
    const category = Category.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const remove = (req, res) => {
    const category = Category.findByIdAndDelete(req.params.id).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}

const removeAll = (req, res) => {
    Category.deleteMany()
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
    add,
    edit,
    remove,
    removeAll,
}