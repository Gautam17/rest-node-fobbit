/**
 * @author Gautam
 */

import { ServerResponse } from "http";

export function send200(res: ServerResponse, resJson?: any) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(resJson || { message: "Done" }));
}

export function send400(res: ServerResponse, resJson?: any) {
  res.statusCode = 400;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(resJson || { message: "Invalid body" }));
}

export function send500(res: ServerResponse, resJson?: any) {
  res.statusCode = 500;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify(
      resJson || { message: "Internal server error, please try after sometime" }
    )
  );
}

export function send404(res: ServerResponse, resJson?: any) {
  console.log("In send404");
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(resJson || { message: "Invalid Path" }));
}
