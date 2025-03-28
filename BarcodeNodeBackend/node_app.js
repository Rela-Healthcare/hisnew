const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/get", (req, res) => {
  res.send("You're live!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
