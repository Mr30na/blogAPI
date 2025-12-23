import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  tags: {
    type: mongoose.Schema.Types.Array,
    required: true,
  },
  createdAt:{
    type: mongoose.Schema.Types.Date
  },
  updatedAt:{
    type: mongoose.Schema.Types.Date
  }
});

export const Blog = mongoose.model("blog",blogSchema);