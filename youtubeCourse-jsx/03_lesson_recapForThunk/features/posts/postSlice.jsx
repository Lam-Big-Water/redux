import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchPost = createAsyncThunk('post/fetchPost', async() => {
    const response = await axios.get(POSTS_URL)

    return response.data
})

const postsSlice = createSlice({
    name: 'post',
    initialState: {items: [], status: 'idle'},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchPost.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const selectAllPosts = (state) => state.post.items;
export const selectAllStatus = (state) => state.post.status;

export default postsSlice.reducer