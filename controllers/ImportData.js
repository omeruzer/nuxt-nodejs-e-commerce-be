const Category = require('../models/Category');
const Product = require('../models/Product');
const data = require('../seeder/data')

const importData = async(req, res) => {
    await data.data.forEach(async e => {
        const category = await new Category({ name: e.name })

        await category.save().then(async(result) => {
            e.products.forEach(async p => {
                const product = await new Product({
                    images: p.images,
                    name: p.name,
                    sku: p.sku,
                    price: p.price,
                    desc: p.desc,
                    category: result._id,
                })

                product.save().then(async(res) => {
                    await Category.findByIdAndUpdate(result._id, {
                        $push: {
                            products: res._id
                        }
                    })
                }).catch((err) => {

                });
            })
        }).catch((err) => {

        });


    });

    await res.json({
        msg: "Added"
    })
}


module.exports = {
    importData,
}