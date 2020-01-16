import React, { useState } from "react";
import compose from "lodash/fp/compose";
import { graphql } from "react-apollo";

import { Getauthor, addBook, getBooksQuery } from "./queries";

const AddBook = ({ getsAuthors, addsBook }) => {
  const [name, setName] = useState("");
  const [genre, setgenre] = useState("");
  const [option, setoption] = useState("");

  const { loading, authors } = getsAuthors;
  console.log(authors);
  const getAuthor = () => {
    if (loading) {
      return <option disabled>loding please wait...</option>;
    } else {
      return authors.map(i => {
        return (
          <option key={i.id} value={i.id}>
            {i.name}
          </option>
        );
      });
    }
  };

  const submit = e => {
    e.preventDefault();
    addsBook({
      variables: {
        name: name,
        genre: genre,
        authorId: option
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
    console.log(name, genre, option);
  };

  return (
    <form className="p2" onSubmit={submit.bind(this)}>
      <input
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="text"
        onChange={e => {
          setgenre(e.target.value);
        }}
        value={genre}
      />
      <div class="align">
        <select
          class="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          onChange={e => {
            setoption(e.target.value);
          }}
          value={option}
        >
          {getAuthor()}
        </select>
        <button className="btn-primary">+</button>
      </div>
    </form>
  );
};
// export default compose(
//   graphql(addBook, { name: MUTATEBOOK }),
//   graphql(Getauthor, { name: GETAUTH }),
// )(AddBook);

// export default compose(graphql(addBook), graphql(Getauthor)(AddBook));
export default compose(
  graphql(Getauthor, { name: "getsAuthors" }),
  graphql(addBook, { name: "addsBook" })
)(AddBook);
