/**
 * @author Gautam
 */
import { IncomingMessage, ServerResponse } from "http";
import { UrlWithParsedQuery } from "url";
import { APIDoc } from "../doc";
import { send404 } from "../helper";
import { createBook, deleteBooks, getBooks, updateBook } from "../service";
import { send200 } from "./res.helper";
/**
 * // all http get method goes here...
 * @param reqUrl
 * @param res
 */
export function handleGetRequest(
  reqUrl: UrlWithParsedQuery,
  res: ServerResponse
) {
  if (reqUrl.pathname === "/book") {
    getBooks(reqUrl, res);
  } else if (reqUrl.pathname === "/") {
    send200(res, APIDoc);
  } else {
    send404(res);
  }
}
/**
 *  other http methods like POST, PUT, DELETE goes here...
 * @param reqUrl
 * @param req
 * @param res
 *
 */
export function handleOtherMethods(
  reqUrl: UrlWithParsedQuery,
  req: IncomingMessage,
  res: ServerResponse
) {
  console.log("in handleOtherMethods()");
  const body: any = [];

  req.on("data", function (chunk) {
    body.push(chunk);
  });
  req.on("error", function (err) {
    console.error("error while processing request", err);
  });
  req.on("end", function () {
    const postBody = JSON.parse(body);
    // create
    if (reqUrl.pathname == "/book" && req.method === "POST") {
      createBook(postBody, res);
    }
    //   update
    else if (reqUrl.pathname == "/book" && req.method === "PUT") {
      updateBook(postBody, res);
    }
    //   delete
    else if (reqUrl.pathname == "/book" && req.method === "DELETE") {
      deleteBooks(postBody, res);
    } else {
      send404(res);
    }
  });
}
