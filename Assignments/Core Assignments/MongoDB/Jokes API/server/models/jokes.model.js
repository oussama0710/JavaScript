const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: { 
        type: String,
        required: true,
        minlength: [10, "setup must be more than 10 characters"]
    },
    punchline: {
        type: String,
        required: true,
        minlength: [3, "punchline must be more than 3 characters"]
     },
  },
  { timestamps: true }
);
// create a constructor function for our model and store in variable 'User'
const jokes = mongoose.model("joke", JokeSchema);
module.exports = jokes;
