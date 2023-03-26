const productController = require("../controllers/products.controller");

module.exports = (app) => {
  app.post("/api/products/new", productController.addNewProduct);
  app.get("/api/products", productController.findAllProducts);
  app.get("/api/product/:id", productController.findOneProduct);
  app.put("/api/product/edit/:id", productController.updateProduct);
  app.delete("/api/product/:id/delete", productController.deleteProduct);
};
