const express = require("express");
const app = express();
const path = require("path");

app.use("/", express.static(path.join(__dirname, "public"))); //gets the files located in the 'public' directory
app.use("/users", express.static(path.join(__dirname, "public/users"))); //gets the files located in the 'public/users' directory

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`The server has started on Port ${PORT}`);
});
