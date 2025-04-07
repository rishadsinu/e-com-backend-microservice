const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const PROTO_PATH = path.resolve(__dirname, '../../product-service/proto/product.proto')

// Add options to correctly handle the proto definition
const packageDef = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDef);

// Print available services
console.log("Available services:", Object.keys(protoDescriptor));

const ProductService = protoDescriptor.ProductService;

// Create client
const client = new ProductService(
  process.env.PRODUCT_SERVICE_URL || 'localhost:3002',
  grpc.credentials.createInsecure()
);

module.exports = client;




