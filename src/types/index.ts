// Generated by https://quicktype.io

export type IBook = {
  author: string;
  title: string;
  isbn: string;
  releaseDate: string;
};
export type WhereForBook = {
  author?: string;
  title?: string;
  isbn: string;
  releaseDate?: string;
};
export type CreateBookBody = { book: IBook };
export type UpdateBookBody = { where: WhereForBook; book: IBook };
export type DeleteBookBody = { isbn: string };
export type SearchBookQuery = {
  author?: string;
  title?: string;
  isbn?: string;
};
