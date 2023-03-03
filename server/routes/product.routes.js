const ProductController = require('../controllers/product.controllers');
const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.findAllProduct);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/update/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
};