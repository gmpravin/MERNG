import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      id
      genre
    }
  }
`;
// const getAllBooksQuery = gql`
//   {
//     books {
//       name
//       id
//       genre
//     }
//   }
// `;

const addBook = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(authorId: $authorId, name: $name, genre: $genre) {
      name
      genre
    }
  }
`;

const Getauthor = gql`
  {
    authors {
      id
      name
    }
  }
`;

const perBookDetail = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          name
          genre
        }
      }
    }
  }
`;

export { addBook, Getauthor, getBooksQuery, perBookDetail };
