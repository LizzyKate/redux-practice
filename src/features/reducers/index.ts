import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { postsSlice } from "./posts";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  posts: postsSlice.reducer,
});
