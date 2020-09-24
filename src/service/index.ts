/**
 * @author Gautam
 */

import { IncomingMessage, ServerResponse } from "http";

export * from "./book";
export interface RequestHandler {
  (req: IncomingMessage, res: ServerResponse, next: Function): any;
}
