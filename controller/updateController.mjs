import { Blog } from "../model/blogSchema.mjs";
const ERROR = { NOT_FOUND: 3000, INVALID_INPUT: 3002 };

export default async function updateValidator(id, body) {
  return new Promise(async (resolve, reject) => {
    try {
      const { title, content, category, tags } = body;
      if (!title || !content || !category || !tags) {
        reject(ERROR.INVALID_INPUT);
      }
      const updateDate = new Date().toISOString();
      const updatedDocument = { updatedAt: updateDate, title,content,category,tags };
      const updateResult = await Blog.findByIdAndUpdate(id, updatedDocument, {
        new: true,
      });
      updateResult === null ? reject(ERROR.NOT_FOUND): resolve(updateResult);
    } catch (err) {
      reject(err);
    }
  });
}
