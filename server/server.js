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
  "mongodb://gmpravin79:demo@cluster0-shard-00-00-jalvu.mongodb.net:27017,cluster0-shard-00-01-jalvu.mongodb.net:27017,cluster0-shard-00-02-jalvu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
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
