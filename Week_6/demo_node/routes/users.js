/** Module for handling users */
const express = require("express");
const cors = require("cors");
const middleware = require("../middleware/functions")

// Define route and middlewares
const users = express.Router();
users.use(cors());
users.use(express.json());

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    // Arbitrarily defined fields for user
    this.requiredFields = () => {
      return ["username", "password"];
    };
  }
}

// Fake database which we will be interacting with, key is the username
let fakeUsers = {
  jwong10: {
    username: "jwong10",
    password: "jwong10",
  },
  frey: {
    username: "frey",
    password: "frey",
  },
};

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
    console.log("User not found");
    middleware.handleErrors("User not found", req, res, next);
  }
});

// TODO: add POST (Create) route with json input validation middleware
users.post("/", (req, res) =>{
  const body = req.body;
  
  if (body['username'] == undefined || body["password"] == undefined) {
    return res.json({
      "msg": "password or username not defined"
    });
  }
  let exists = false;
  let userDB = fakeUsers;
  if (userDB[body['username']]) {
    exists = true;
  }
  if (exists) return res.json({
    "msg": "user registered"
  });
  
  console.log(body);
  const user_obj = {username: body['username'], password: body['password']};
  fakeUsers[body['username']] = user_obj;
  res.status(200).json({"msg": "successful", data : user_obj});
});

// Export Route
module.exports = users;
