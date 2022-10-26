/** Twitter Demo */
const firebase = require("./firebase");
const app = require("express")();
const db = firebase.firestore;
require("dotenv").config();

app.post("/tweets", async (req, res) => {});

// Gets all Tweets
app.get("/", async (req, res) => {
  const twitter = db.collection("tweets");

  const tweets = await twitter.get(); // Since async operation, use await
  const ret = tweets.docs.map((data) => data.data());

  res.json(ret);
});

// Gets all tweets from today
app.get("/tweets/today", async (req, res) => {
  const twitter = db.collection("tweets");

  var d = new Date();
  d.setDate(d.getDate() - 1);

  const query = await twitter.where("createdAt", ">=", d).get();
  const ret = query.docs.map((data) => data.data());
  res.json(ret);
});

//TODO: Get all tweets by person id

//TODO: Create a tweet

app.listen(process.env["PORT"], () =>
  console.log("App listening on port " + process.env["PORT"])
);
