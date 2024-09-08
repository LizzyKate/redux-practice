import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./types";
import { addPost } from "./actions/postReducer";

const initialState: Post[] = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost,
  },
});

export const { addPost: addPostAction } = postsSlice.actions;
