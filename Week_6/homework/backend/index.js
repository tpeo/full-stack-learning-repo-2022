/** Todo App */
const firebase = require("./firebase/cred.js");
const express = require("express");
const app = express()
const cors = require('cors')
const db = firebase.firestore();
require("dotenv").config();


// Application level middleware
app.use(express.json())
app.use(cors())


// Define Routes
app.use("/todo", require("./routes/todo.js"));


// //post
// app.post("/", async (req, res) => {
//     const todos = db.collection("todos");
//     const body = req.body;

//     // if(body.todo === undefined){
//     //     return res.json({
//     //         msg: "Error: todo not defined",
//     //         data: {},
//     //     })
//     // }

//     const doc = await db.collection('todos').add({
//       todo: body.todo,
//       email: body.email,
//     });

//     const doc2 = await db.collection('todos').doc(doc.id).update({
//       todo: body.todo,
//       email: body.email,
//       uid: doc.id
//     });

//     // res.status(201).send(`Created a new todo: ${newDoc.id}`);
//     // console.log("id " + doc.id);
//     res.status(200).send("OK")
//   });



//get
//need to send doc id too
// app.get("/", async (req, res) => {
//     const todo = db.collection("todos");
  
//     const todos = await todo.get(); // Since async operation, use await
//     //const todos = await todo.where('email', '==', body.email).get();
//     const ret = todos.docs.map((obj) => obj.data());

//     // (todos.docs).forEach(doc => console.log(doc.id))
//     // console.log(ret);
  
//     res.json(ret);
//   });


// //delete
// app.delete("/", async (req, res) => {
//   const body = req.body;

//   const todo = db.collection("todos");
//   const ret = await todo.doc(body.uid).delete();

//   res.json(ret);
// });


app.listen(process.env["PORT"], () =>
  console.log("App listening on port " + process.env["PORT"])
);

