var express = require('express');
var app = express();
const { db } = require("./util/admin.js");
const PORT = process.env.PORT || 5050

/*
app.get('/', (req, res) => {
    res.send('This is my demo project')
})
app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`); 
});
*/

async function getByUsername(username){
    const docs = await db.collection("todo").where("username", "==", username).get();
    //console.log(docs.data());
    var matches = [];
    docs.forEach(
        doc => {
            console.log(doc.data());
            matches.push(doc.data());
        }
    );
    return matches;
}

let temp = getByUsername("b1168");

console.log(temp);

/*
app.get('/todo', (req, res) => {
    res.setEncoding(f());
});
app.


if (!todo.exists) {
    console.log('not found');
}
else{
    console.log(doc.data());
}
*/