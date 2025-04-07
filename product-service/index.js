const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/productModel')
const PORT = process.env.PORT || 3002

// mongodb connection
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Product DB connected"));

const packageDef = protoLoader.loadSync('./proto/product.proto');
const grpcObject = grpc.loadPackageDefinition(packageDef);
const productPackage = grpcObject.ProductService;


// RPC Function Implementations
function addProduct(call, callBack) {
    const product = new Product(call.request);
    product.save().then(() => {
        callBack(null, { message : "Product Added"})
    })
}

function getAllProducts(call, callback) {
    Product.find().then(products => {
        callback(null, {
            products : products.map(p => ({ title : p.title, price : p.price}))
        })
    })
}

const server = new grpc.Server();
server.addService(productPackage.service, { AddProduct:addProduct, GetAllProducts:getAllProducts});

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), ()=> {
    server.start();
    console.log(`gRPC Product Service running on port http://localhost:${PORT}`)
})







