const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(
  //your mongodb url,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
