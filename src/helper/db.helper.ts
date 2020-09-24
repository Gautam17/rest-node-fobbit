import _ from "lodash";
import { IBook, SearchBookQuery, WhereForBook } from "../types";
// NOTE: instead of book array, actual db can be used
let books: IBook[] = [
  {
    author: "David Abrams",
    title: "Fobbit",
    isbn: "1846557216",
    releaseDate: "September 2012",
  },
  {
    author: "Gomzy",
    title: "node js",
    isbn: "987654321",
    releaseDate: "September 2020",
  },
];

/**
 * add book and return index of newly pushed book
 * @param book
 */
export const addBook = (book: IBook) => books.push(book);

/**
 * As of now book can be search by author, title and isbn
 * This search is limited to exact match not free
 * @param where
 * return all if search query is not given
 */
export const searchBook = ({ author, title, isbn }: SearchBookQuery) => {
  if (!author && !title && !isbn) {
    return books;
  } else {
    return books.filter(
      (b) =>
        b.author.toLowerCase() === author?.toLowerCase() ||
        b.title.toLowerCase() === title?.toLowerCase() ||
        b.isbn.toLowerCase() === isbn?.toLowerCase()
    );
  }
};

/**
 * as of now this method supports replace by isbn only and update first occurrence
 * @param where
 * @param book
 * return index and updated book, -1 means book not found
 */
export const updateBook = (
  { isbn, author, title }: WhereForBook,
  book: IBook
) => {
  // TODO: update find predicate to support all where params
  const findPredicate = (b: IBook) => isbn === b.isbn;
  const index = books.findIndex(findPredicate);
  if (index > -1) {
    books[index] = book;
    return { index, updatedBook: books[index] };
  } else {
    return { index };
  }
};

export const deleteBook = (isbn: string) => {
  // console.log("books length before", books.length);
  const deletedBooks = _.remove(books, (book) => {
    // console.log({ isbn, bisbn: book.isbn, match: book.isbn === isbn });
    return book.isbn === isbn;
  });
  // console.log("books length after", books.length);
  // console.log("new books array after performing delete");
  // console.table(books);
  return deletedBooks;
};

// export const upsert = (book: IBook) => {
//   const i = books.findIndex((b) => book.isbn === b.isbn);
//   if (i > -1) {
//     books[i] = book;
//     return books[i];
//   } else {
//     books.push(book);
//     return book;
//   }
// };
