const product = require("../models/products.model");

//Create ONE
module.exports.addNewProduct = (request, response) => {
    product.create(request.body)
      .then((newlyCreatedProduct) => {
        response.json(newlyCreatedProduct);
      })
      .catch((err) => {
        response.json({ message: "Something went wrong", error: err });
      });
  };
// Read ALL
module.exports.findAllProducts = (request, response) => {
    product.find()
      .then((allDaProducts) => {
        response.json(allDaProducts); // []
      })
      .catch((err) => {
        response.json({ message: "Something went wrong", error: err });
      });
  };
