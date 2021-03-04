const express = require("express");
const app = express();
const path = require("path");
const users = require("./routes/api/users");

app.use("/", express.static(path.join(__dirname, "public"))); //gets the static html file located in the 'public' directory
app.use("/users", express.static(path.join(__dirname, "public/users"))); //gets the static html file located in the 'public/users' directory

//sends user file as JSON response to client
app.use("/api/users", (req, res) => {
  res.json(users);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`The server has started on Port ${PORT}`);
});
