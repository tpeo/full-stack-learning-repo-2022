/** Todo App */
const firebase = require("./firebase/cred.js");
const express = require("express");
const app = express()
const cors = require('cors')
const db = firebase.firestore();


const pbk = require("pbkdf2");
const jwt = require("jsonwebtoken");

// Application level middleware
app.use(express.json())
app.use(cors())


// Define Routes
// app.use("/todo", require("./routes/todo.js"));


require("dotenv").config();




//get
//need to send doc id too
app.get("/", async (req, res) => {
    const todo = db.collection("todos");
  
    const todos = await todo.get(); // Since async operation, use await
    //const todos = await todo.where('email', '==', body.email).get();
    const ret = todos.docs.map((obj) => obj.data());

    // (todos.docs).forEach(doc => console.log(doc.id))
    // console.log(ret);
  
    res.json(ret);
  });


  app.get("/:user_id", async (req, res) => {
    const todo = db.collection("todos");
  
    const user = req.params.user_id;
    //const todos = await todo.get(); // Since async operation, use await
    const todos = await todo.where('email', '==', user).get();
    const ret = todos.docs.map((obj) => obj.data());

    // (todos.docs).forEach(doc => console.log(doc.id))
    // console.log(ret);
  
    res.json(ret);
  });


  













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
      //let token = "";
      let token = headers[1];
      //console.log(token);
      try {
        let decodedToken = jwt.verify(token, process.env["JWTSECRET"]);
        // Set user object which can be accessed in the req
        req.user = decodedToken;
        //console.log(req.user);
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


//post
app.post("/", authMiddleware, async (req, res) => {
  const todos = db.collection("todos");
  const body = req.body;

  if(body.email === req.user){
    const doc = await db.collection('todos').add({
      todo: body.todo,
      email: body.email,
    });

    const doc2 = await db.collection('todos').doc(doc.id).update({
      todo: body.todo,
      email: body.email,
      uid: doc.id
    });

    res.status(200).send("OK")
  }
  else{
    res.status(401).send("Not authorized.")
  }
  
});


//delete
app.delete("/", authMiddleware, async (req, res) => {
  const body = req.body;
  if(body.email === req.user){
    const todo = db.collection("todos");
    const ret = await todo.doc(body.uid).delete();
  
    res.json(ret);
  }
  else{
    res.status(401).send("Not authorized.")
  }
});








// Creates a user with password, no checks needed
app.post("/register", async (req, res) => {
  // Get the username and password from request
  const { username, password } = req.body;
  // hash the password
  const passHashed = pbk
    .pbkdf2Sync(password, process.env["SALT"], 1000, 32, "sha256")
    .toString();
  // Check for duplicate users
  const check = await db.collection("user").doc(username).get();
  if (check.exists) {
    return res.status(400).json({ msg: "User exists" });
  }
  // TODO: Create the User and fill in user and token
  const user = await db.collection("user").doc(username).set({username: username, password: passHashed, salt: process.env["SALT"]});
  //const token = req.headers["x-access-token"];
  const token = jwt.sign(username, process.env["JWTSECRET"]);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

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
  console.log("username " + username);
  console.log("password " + password);
  // TODO: hash the password
  const passHashed = pbk
    .pbkdf2Sync(password, process.env["SALT"], 1000, 32, "sha256")
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
  samePassword = passHashed === user.password;
  if (samePassword) {
    // TODO: Issue token if passwords match, else, return a 401, not authorized
    const token = jwt.sign(username, process.env["JWTSECRET"]);
    return res.json({
      msg: "successfully logged in ",
      data: { username: username },
      //token: req.headers["x-access-token"],
      token: token,
    });
  } else {
    return res.status(401).json({ msg: "Username or password was incorrect" });
  }
});



app.listen(process.env["PORT"], () =>
  console.log("App listening on port " + process.env["PORT"])
);

