const firebase = require("./middleware/firebase");
const express = require("express");
const db = firebase.firestore;
const pbk = require("pbkdf2");
const app = express();
app.use(express.json());

// Should be stored in environment variable, but ok for this demo
const SALT = ";asf;klsadfllsfjalskdfjl";

// Creates a user with password, no checks needed
app.post("/password", async (req, res) => {
  // Get the username and password from request
  const { username, password } = req.body;
  // TODO: hash the password
  // Create the User
  // Send message indicating success
  res.send("User Created");
});

// Verifies password
app.post("/verifyPassword", async (req, res) => {
  const { username, password } = req.body;
  // TODO: hash the password
  // Set this to when you check the password
  let samePassword = false;
  // Get the user
  // Cross check the user's password with the passwordHash
  // Send arbitrary message
  if (samePassword) {
    res.send("Password Verified!");
  } else {
    res.send("Password Invalid!");
  }
});

app.listen(4000, () => console.log("App listening on port " + 4000));
