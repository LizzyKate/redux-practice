import { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";

// Define the addPost reducer separately
export const addPost = (state: Post[], action: PayloadAction<Post>) => {
  state.push(action.payload);
};
