import { configureStore } from "@reduxjs/toolkit";
import feedSlice from "./feed/slice";
import postSlice from "./postPage/slice";

const store = configureStore({
  reducer: {
    feed: feedSlice,
    posts: postSlice,
  },
});

export default store;
