var express = require("express");
const app = express();
const files_routes = require("./routes/files");
app.use("/files", files_routes);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
