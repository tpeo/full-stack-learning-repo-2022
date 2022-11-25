const firebase = require("firebase-admin");
const credentials = require("./cred.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials)
});

module.exports = firebase;
