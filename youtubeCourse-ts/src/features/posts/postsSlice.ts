import { createSlice } from "@reduxjs/toolkit";

export interface PostsType {
    id: string;
    title: string;
    content: string;
}

export type AllPostsType = {
    posts: PostsType[];
}

const initialState: PostsType[] = [
    {id: '1', title: 'Learning Redux Toolkit', content: 'It is so hard.'},
    {id: '2', title: 'Learning Redux Toolkit with TypeScript', content: 'It is really hard.'}
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export const selectAllPosts = (state: AllPostsType) => state.posts;


export default postsSlice.reducer;