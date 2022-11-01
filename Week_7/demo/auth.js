const firebase = require("./middleware/firebase");
const express = require("express");
const db = firebase.firestore;
const pbk = require("pbkdf2");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

// Should be stored in environment variable, but ok for this demo
const SALT = ";asf;klsadfllsfjalskdfjl";
const JWTSECRET = "abc123";

// Auth Middleware for non expiring tokens
function authMiddleware(req, res, next) {
  console.log("next");
  // Check if proper header exists
  if (req.headers["authorization"]) {
    // Split on space -> should return ["Bearer", "${token}"]
    const headers = req.headers["authorization"].split(" ");
    // Check if first argument is Bearer
    if (headers.length === 2 && headers[0] === "Bearer") {
      // TODO: get the token
      let token = "";
      try {
        let decodedToken = jwt.verify(token, JWTSECRET);
        // Set user object which can be accessed in the req
        req.user = decodedToken.username;
        next(); // Go to next function
      } catch (e) {
        return res.status(401).json({ msg: e.message });
      }
    } else {
      return res.status(401).json({ msg: "invalid token" });
    }
  } else {
    return res.status(401).json({ msg: "token was not found in header" });
  }
}

// Creates a user with password, no checks needed
app.post("/register", async (req, res) => {
  // Get the username and password from request
  const { username, password } = req.body;
  // hash the password
  const passHashed = pbk
    .pbkdf2Sync(password, "SALT", 100, 32, "sha256")
    .toString();
  // Check for duplicate users
  const check = await db.collection("user").doc(username).get();
  if (check.exists) {
    return res.status(400).json({ msg: "User exists" });
  }
  // TODO: Create the User and fill in user and token
  const user = "";
  const token = "";

  // Send JWT Token
  res.json({
    msg: "successfully created",
    data: { username: username },
    token: token,
  });
});

// Verifies password
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // TODO: hash the password
  const passHashed = pbk
    .pbkdf2Sync(password, "SALT", 100, 32, "sha256")
    .toString();
  // Get the user
  const check = await db.collection("user").doc(username).get();
  // Check if user exists
  if (!check.exists) {
    return res.status(400).json({ msg: "User does not exists" });
  }
  // Cross reference the stored password with the incoming password (hashed)
  const user = check.data();
  // TODO: fill in samepassword
  let samePassword = false;
  if (samePassword) {
    // TODO: Issue token if passwords match, else, return a 401, not authorized
    const token = ""
    return res.json({
      msg: "successfully logged in",
      data: { username: username },
      token: token,
    });
  } else {
    return res.status(401).json({ msg: "Username or password was incorrect" });
  }
});

// Example of a protected route
app.get("/protected", authMiddleware, (req, res) => {
  res.send("User " + req.user + " was authenticated");
});

app.listen(6000, () => console.log("App listening on port " + 6000));
