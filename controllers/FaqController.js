const Faq = require('../models/Faq');
const {
    faker
} = require('@faker-js/faker');
const importData = (req, res) => {
    for (let i = 0; i < 10; i++) {
        const faq = new Faq({
            title: faker.lorem.lines(),
            answer: faker.lorem.paragraph()
        })

        faq.save()
    }
    res.json({
        msg: "Added"
    })
}

const all = (req, res) => {
    Faq.find()
        .then((result) => {
            res.json(result)

        }).catch((err) => {
            res.json(err)

        });

}
const detail = (req, res) => {
    const faq = Faq.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)

        });
}
const add = (req, res) => {
    const faq = new Faq(req.body)

    faq.save().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const edit = (req, res) => {
    const faq = Faq.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}
const remove = (req, res) => {
    const faq = Faq.findByIdAndDelete(req.params.id).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)

    });
}

const removeAll = (req, res) => {
    Faq.deleteMany()
        .then((result) => {
            res.json({
                msg: "Deleted All"
            })
        }).catch((err) => {

        });
}

module.exports = {
    all,
    detail,
    add,
    edit,
    remove,
    removeAll,
    importData
}