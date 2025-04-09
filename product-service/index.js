const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { addProduct, getAllProducts, orderProduct } = require('./services/productService.js');

dotenv.config();
const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Product DB connected"))
    .catch(err => console.error("DB connection error:", err));

const packageDef = protoLoader.loadSync('./proto/product.proto');
const grpcObject = grpc.loadPackageDefinition(packageDef);
const productPackage = grpcObject.ProductService;

const server = new grpc.Server();
server.addService(productPackage.service, {
    AddProduct: addProduct,
    GetAllProducts: getAllProducts,
    OrderProduct: orderProduct
});

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`gRPC Product Service running on port http://localhost:${PORT}`);
});