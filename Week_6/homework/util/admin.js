var admin = require("firebase-admin");

var serviceAccount = require("../cred.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };