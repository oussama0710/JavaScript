const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const DB = "productsCollection"

// MIDDLEWARE
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors()); 
// -------------------------------------------
require("./config/mongoose.config")(DB)

// Import the routes
require("./routes/products.route")(app)
// START THE SERVER
app.listen(PORT,()=>{console.log("We have a lift off 🚀")})