/**
 * @author Gautam
 */
import { object, string } from "yup";
// validate all api inputs using yup?
export const createBookSchema = object().shape({
  author: string().required(),
  title: string().required(),
  isbn: string().required(),
  releaseDate: string().required(),
});
