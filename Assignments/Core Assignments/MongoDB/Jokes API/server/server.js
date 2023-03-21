const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokesCollection"

// MIDDLEWARE
app.use(express.json(), express.urlencoded({extended:true}));
// -------------------------------------------
require("./config/mongoose.config")(DB)

// Import the routes
require("./routes/jokes.route")(app)
// START THE SERVER
app.listen(PORT,()=>{console.log("We have a lift off 🚀")})