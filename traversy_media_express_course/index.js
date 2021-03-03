const express = require("express"); //import express
const path = require("path");

const logger = require("./middleware/logger");

const app = express(); //save express function in variable

//init middleware
//app.use(logger);

//set a static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000; //first we gonna check if the system has the port stored in a environment variable and IF NOT, we gonna defaut to port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //listens for requests made on this port
