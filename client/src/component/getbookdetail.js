import React, { useState } from "react";
import { graphql } from "react-apollo";
import compose from "lodash/fp/compose";
import { getBooksQuery } from "./queries";
import Targetbook from "./targetbook";

const Getbookdetail = ({ getsBooksQuery, persBookDetail }) => {
  const [bookid, setBook] = useState(null);

  console.log(bookid);

  console.log(persBookDetail);

  const { loading, books } = getsBooksQuery;
  const getBook = () => {
    if (loading) {
      return <option disabled>loding please wait...</option>;
    } else {
      return books.map(i => {
        return (
          <option
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            onClick={e => {
              setBook(e.target.value);
            }}
            key={i.id}
            value={i.id}
          >
            {i.name}
          </option>
        );
      });
    }
  };

  return (
    <div className="p3">
      <select
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
        onChange={e => {
          setBook(e.target.value);
        }}
        value={bookid}
      >
        {getBook()}
      </select>
      <Targetbook data={bookid} />
      {/* <div>{getDetails()}</div> */}
    </div>
  );
};

export default compose(graphql(getBooksQuery, { name: "getsBooksQuery" }))(
  Getbookdetail
);
