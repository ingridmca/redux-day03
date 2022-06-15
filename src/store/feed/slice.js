import { createSlice } from "@reduxjs/toolkit";

const initialState = { feedposts: [] };

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      // console.log the action to see what data is coming from the thunk
      // console.log("postsFetched action", action);
      state.feedposts = [...action.payload]; // get our list of posts from the action payload
    },
  },
});

export const { postsFetched } = feedSlice.actions;

export default feedSlice.reducer;
