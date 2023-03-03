const Product = require('../models/product.models');

module.exports = ({
// CREATE (POST)
    createProduct: (req, res) => {
        Product.create(req.body, {new: true, runValidators: true})
            .then((newProduct) => res.json(newProduct))
            .catch((err) => res.status(400).json(err))
    }, 
// READ (GET)
    findAllProduct: (req, res) => {
        // if the request has query param
        // query is www.google.com?params=123 (params=123)
        if (req.query.productIds){
            const productIds = JSON.parse(req.query.productIds);
            Product.find({
                '_id': { $in: productIds}
            }).sort({title: 1})
                .then((allProduct) => res.json(allProduct))
                .catch((err) => res.status(400).json({message: "Something went wrong druing find", error: err}))
        } else {
            Product.find().sort({title: 1})
                .then((allProduct) => res.json(allProduct))
                .catch((err) => res.status(400).json({message: "Something went wrong druing find", error: err}))
        }
    }, 
    findOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
    }, 
// UPDATE(PUT)
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then((updatedProduct) => res.json(updatedProduct))
            .catch((err) => res.status(400).json(err))
    }, 
// DELETE (DELETE)
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then((deletedProduct) => res.json({message: "Successfully deleted the Product", title: deletedProduct}))
            .catch((err) => res.status(400).json({message: "Something went wrong during delete", error: err}))
    }
});