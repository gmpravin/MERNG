import React from "react";
// eslint-disable-next-line
import { perBookDetail } from "./queries";
// eslint-disable-next-line
import { graphql } from "react-apollo";
// eslint-disable-next-line
const Targetbook = ({ data, perBookDetail }) => {
  console.log(data);
  // eslint-disable-next-line
  const { book } = data;
  const get = () => {
    if (typeof book == "undefined") {
      return <div>Sorry cannot selected any item</div>;
    } else {
      return (
        <div>
          <h1>Author</h1>
          <h4>Book is {book.name}</h4>
          <h4>Book genre is {book.genre}</h4>
          <h4>Author is age {book.author.age}</h4>
          <h1>other books</h1>
          {book.author.books.map(i => {
            return (
              <div className="list-group">
                <h4 className="list-group-item">Book name is {i.name}</h4>
                <h4 lassName="list-group-item">Book genre is {i.genre}</h4>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return <div>{get()}</div>;
};

export default graphql(perBookDetail, {
  options: ({ data }) => {
    return {
      variables: {
        id: data
      }
    };
  }
})(Targetbook);

//   useEffect(() => {
//     return () => {
//       perBookDetail({
//         option: ({ data }) => {
//           return {
//             variables: {
//               id: data
//             }
//           };
//         }
//       });
//     };
//   }, [perBookDetail]);
