const Product = require('../models/productModel');

exports.addProduct = (call, callback) => {
    const product = new Product(call.request);
    product.save().then(() => {
        callback(null, { message: "Product Added" });
    }).catch(err => {
        callback(err, null);
    });
};

exports.getAllProducts = (call, callback) => {
    Product.find().then(products => {
        callback(null, {
            products: products.map(p => ({
                title: p.title,
                price: p.price
            }))
        });
    }).catch(err => {
        callback(err, null);
    });
};

exports.orderProduct = (call, callback) => {
    const { productId, quantity } = call.request;

    Product.findById(productId)
        .then(product => {
            if (!product) {
                return callback(null, { message: "Product not found" });
            }

            if (product.stock < quantity) {
                return callback(null, { message: "Not enough stock" });
            }

            product.stock -= quantity;
            return product.save();
        })
        .then(updatedProduct => {
            if (updatedProduct) {
                callback(null, { message: "Order placed successfully" });
            }
        })
        .catch(err => {
            callback(err, null);
        });
};