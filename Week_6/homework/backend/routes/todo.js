/** Module for handling users */
const firebase = require("../firebase/cred.js");
const express = require("express");
const app = express()
const cors = require('cors')
const db = firebase.firestore();
require("dotenv").config();

// Define route and middlewares
const todo = express.Router();
todo.use(cors());
todo.use(express.json());

  todo.post("/", async (req, res) => {
    const todos = db.collection("todos");
    const body = req.body;

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
  });


  todo.get("/", async (req, res) => {
    const todo = db.collection("todos");
  
    const todos = await todo.get(); // Since async operation, use await
    //const todos = await todo.where('email', '==', body.email).get();
    const ret = todos.docs.map((obj) => obj.data());

    // (todos.docs).forEach(doc => console.log(doc.id))
    // console.log(ret);
  
    res.json(ret);
  });

  // TODO: Integrate with Error Handler
  todo.get("/:user_id", async (req, res) => {
    const todo = db.collection("todos");
  
    const user = req.params.user_id;
    //const todos = await todo.get(); // Since async operation, use await
    const todos = await todo.where('email', '==', user).get();
    const ret = todos.docs.map((obj) => obj.data());

    // (todos.docs).forEach(doc => console.log(doc.id))
    // console.log(ret);
  
    res.json(ret);
  });



//delete
todo.delete("/", async (req, res) => {
  const body = req.body;

  const todo = db.collection("todos");
  const ret = await todo.doc(body.uid).delete();

  res.json(ret);
});


// Export Route
module.exports = todo;