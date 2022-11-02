const firebase = require('firebase');

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app