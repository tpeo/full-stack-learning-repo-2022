// Global Import
const express = require("express");
// Module Import
const app = express();
app.use(express.json()); // Lets us use json in parsing the request
const dotenv = require("dotenv").config();

// Define Routes
app.use("/users", require("./routes/users.js"));

app.get("/", (req, res) => {
  res.status(201).json({ hello: "HELLO WORLD" });
});

// TODO: we are currently listening to port 3000, lets define an environment variable and use that instead
app.listen(3000, () => console.log("App listening on port 3000"));
