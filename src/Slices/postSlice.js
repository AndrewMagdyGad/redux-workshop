import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        getPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { addPost, getPosts } = postSlice.actions;
export default postSlice.reducer;
