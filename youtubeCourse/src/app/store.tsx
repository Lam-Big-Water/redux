import {configureStore} from "@reduxjs/toolkit";
// import userReducer from '../features/users/usersSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch