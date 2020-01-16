import React from "react";
// import compose from "lodash/fp/compose";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
/* eslint-disable */
const getBooksQuery = gql`
  {
    books {
      name
      id
      genre
    }
  }
`;

const Booklist = ({ data }) => {
  const { loading, books } = data;
  console.log(books);
  const show = () => {
    if (loading) {
      return <div>loding please wait...</div>;
    } else {
      return books.map(book => {
        return (
          <div key={book.id}>
            <li className="list-group-item">Book name:{book.name}</li>
            <li>genre:{book.genre}</li>
          </div>
        );
      });
    }
  };

  return (
    <div className="p1">
      <h2>Booklist</h2>
      <div>{show()}</div>

      <hr></hr>
      <div>add book</div>
    </div>
  );
};

// export default compose(graphql(getBooksQuery, { name: getBooksQuery }))(
//   Booklist
// );

export default graphql(getBooksQuery)(Booklist);
