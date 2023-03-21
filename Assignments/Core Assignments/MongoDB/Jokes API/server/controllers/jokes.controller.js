const joke = require("../models/jokes.model");

//Read ALL
module.exports.findAllJokes = (request, response) => {
  joke.find()
    .then((allDaJokes) => {
      response.json(allDaJokes); // []
    })
    .catch((err) => {
      response.json({ message: "Something went wrong", error: err });
    });
};
// READ ONE
module.exports.findOneJoke = (request, response) => {
  joke.findOne({ _id: request.params.id })
    .then((oneJoke) => {
      response.json(oneJoke);
    })
    .catch((err) => {
      response.json({ message: "Something went wrong", error: err });
    });
};
// Read Random
module.exports.findOneRandomJoke = (request, response) => {
    joke.findOne({ _id: request.params.id })
      .then((oneJoke) => {
        response.json(oneJoke);
      })
      .catch((err) => {
        response.json({ message: "Something went wrong", error: err });
      });
};
//Create ONE
module.exports.addNewJoke = (request, response) => {
  joke.create(request.body)
    .then((newlyCreatedJoke) => {
      response.json(newlyCreatedJoke);
    })
    .catch((err) => {
      response.json({ message: "Something went wrong", error: err });
    });
};
// UPDATE
module.exports.updateJoke = (request, response) => {
  joke.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
      runValidators: true,
    })
    .then((updatedJoke) => {
      response.json(updatedJoke);
    })
    .catch((err) => {
      response.json({ message: "Something went wrong", error: err });
    });
};
//DELETE
module.exports.deleteJoke = (request, response) => {
  joke.deleteOne({ _id: request.params.id })
    .then((result) => {
      response.json({ result });
    })
    .catch((err) => {
      response.json({ message: "Something went wrong", error: err });
    });
};
