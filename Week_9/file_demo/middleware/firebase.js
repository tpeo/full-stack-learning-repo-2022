var admin = require("firebase-admin");
var serviceAccount = require("./cred.json");

// Load Credentials
var { getStorage } = require("firebase-admin/storage");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://databases-demo-bd424.appspot.com",
});
var bucket = getStorage().bucket();

module.exports = bucket;
