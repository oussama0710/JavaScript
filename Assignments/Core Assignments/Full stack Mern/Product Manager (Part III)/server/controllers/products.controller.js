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
//Read ONE
  module.exports.findOneProduct = (request, response) =>{
    product.findOne({_id: request.params.id})
    .then((oneProduct)=>{response.json(oneProduct)})
    .catch((err)=>{ response.json({message: "Something went wrong", error: err})})
}

// UPDATE 
module.exports.updateProduct = (request, response) =>{
  product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
  .then((updatedProduct)=>{response.json(updatedProduct)})
  .catch((err)=>{response.json({ message: 'Something went wrong', error: err })})
}
// DELETE
module.exports.deleteProduct = (request, response) =>{
  product.deleteOne({_id: request.params.id})
  .then((result)=>{response.json({result})})
  .catch((err)=>{response.json({ message: 'Something went wrong', error: err })})
}
