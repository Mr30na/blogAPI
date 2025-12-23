import { Blog } from "../model/blogSchema.mjs";

export default async function addValidator(data) {
  return new Promise(async (resolve, reject) => {
    if (data.title && data.content && data.category && data.tags) {
      const currentTime = new Date().toISOString();
      data = {
        ...data,
        createdAt: currentTime,
        updatedAt: currentTime,
      };
      const createResult = await Blog.create(data);

      resolve(createResult);
    } else {
      reject("title is missing");
    }
  });
}
