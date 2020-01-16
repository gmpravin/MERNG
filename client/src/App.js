import React from "react";
// import compose from "lodash/fp/compose";

import ApolloClinet from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Booklist from "./component/booklist";
import AddBook from "./component/addBook";
import Getbookdetail from "./component/getbookdetail";
import Nav from "./component/nav";

const client = new ApolloClinet({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <div className="App">
        <Booklist />
        <AddBook />
        <Getbookdetail />
      </div>
    </ApolloProvider>
  );
}

export default App;
