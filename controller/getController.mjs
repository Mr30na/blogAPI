import { Blog } from "../model/blogSchema.mjs";
const ERROR = { NOT_FOUND: 1000 };

async function fetchByID(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const blog = await Blog.findById(id);
      blog === null ? reject(ERROR.NOT_FOUND) :resolve(blog);
    } catch (err) {
      reject(err);
    }
  });
}

async function fetchAllBlogs(filter) {
  return new Promise(async (resolve, reject) => {
    try {
      const blogs = await Blog.find(filter);
      resolve(blogs);
    } catch (err) {
      reject(err);
    }
  });
}

export { fetchByID, fetchAllBlogs };
