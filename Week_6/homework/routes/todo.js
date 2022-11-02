/** Module for handling users */
const express = require("express");
const cors = require("cors");

// Define route and middlewares
const todo = express.Router();
todo.use(cors());
todo.use(express.json());

class Todo {
  constructor(name, finished) {
    this.name = name;
    this.finished = finished;
    // Arbitrarily defined fields for user
    this.requiredFields = () => {
      return ["name", "finished"];
    };
  }
}


users.get("/", (req, res) => {
  let userDB = fakeUsers;
  res.status(200).json(userDB);
});

// TODO: Integrate with Error Handler
users.get("/:user_id", (req, res, next) => {
  let userDB = fakeUsers;
  const user = req.params.user_id;
  if (userDB[user]) {
    res.status(200).json(userDB[user]);
  } else {
    throw Error("User not found");
  }
});

// TODO: add POST (Create) route with json input validation middleware

// Export Route
module.exports = users;
