import { Blog } from "../model/blogSchema.mjs";
const ERROR = { NOT_FOUND: 2000 };

export default function deleteValidator(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const deleteResult = await Blog.findByIdAndDelete(id);
      deleteResult === null ? reject(ERROR.NOT_FOUND) : resolve(deleteResult);
    } catch (err) {
      reject(err);
    }
  });
}
