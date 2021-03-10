const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

//tells server to listen on Port 5000
app.listen(5000, () => {
  console.log("The server started on Port 5000.");
});
