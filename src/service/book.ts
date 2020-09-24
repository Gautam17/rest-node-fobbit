/**
 * @author Gautam
 */

import { ServerResponse } from "http";
import { UrlWithParsedQuery } from "url";
import { send200, send404, send500, send400 } from "../helper";
import * as dbHelper from "../helper/db.helper";
import {
  CreateBookBody,
  DeleteBookBody,
  IBook,
  UpdateBookBody,
} from "../types";
import { createBookSchema } from "../validator";
// import { createBookSchema } from "../validator";

export async function createBook(
  { book }: CreateBookBody,
  res: ServerResponse
) {
  try {
    try {
      console.log(book, "in create mthod");
      await createBookSchema.validate(book, { abortEarly: true });
    } catch (validationErrors) {
      console.log("validationErrors", validationErrors.errors);
      return send400(res, validationErrors.errors);
    }

    // console.error("invalid body");
    // TODO: handle validation error and repeat the same for rest of the API
    // send400()
    // });
    return send200(res, { message: "Done", index: dbHelper.addBook(book) });
  } catch (error) {
    console.error("error while creating book", book);
    return send500(res);
  }
}

export function getBooks(reqUrl: UrlWithParsedQuery, res: ServerResponse) {
  try {
    return send200(res, dbHelper.searchBook(reqUrl.query as IBook));
  } catch (error) {
    console.error("error while searching book", error);
    return send500(res);
  }
}

export function updateBook(
  { where, book }: UpdateBookBody,
  res: ServerResponse
) {
  try {
    const response = dbHelper.updateBook(where, book);
    return response.index > -1
      ? send200(res, {
          message: "Done",
          ...response,
        })
      : send404(res, {
          message: `Book not found for isbn (${where.isbn})`,
        });
  } catch (error) {
    console.error("error while searching book", error);
    return send500(res);
  }
}

export function deleteBooks({ isbn }: DeleteBookBody, res: ServerResponse) {
  try {
    const deletedBooks = dbHelper.deleteBook(isbn);
    return deletedBooks.length > 0
      ? send200(res, {
          message: "Done",
          deletedBooks,
        })
      : send404(res, {
          message: `Book not found for isbn (${isbn})`,
        });
  } catch (error) {
    console.error("error while searching book", error);
    return send500(res);
  }
}
