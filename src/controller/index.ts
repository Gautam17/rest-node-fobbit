/**
 * @author Gautam
 */
import http from "http";
import url from "url";
import { handleGetRequest, handleOtherMethods } from "../helper";

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url as string, true);
  // console.table(reqUrl.query);
  console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);
  if (req.method === "GET") {
    handleGetRequest(reqUrl, res);
  } else {
    handleOtherMethods(reqUrl, req, res);
  }
});
export default server;
