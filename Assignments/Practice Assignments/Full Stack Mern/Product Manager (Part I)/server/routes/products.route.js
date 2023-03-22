const productController = require("../controllers/products.controller")

module.exports = (app) => {
    app.post("/api/products/new", productController.addNewProduct);
    app.get("/api/products", productController.findAllProducts);
}