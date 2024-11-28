import { createSlice } from "@reduxjs/toolkit";

interface UserTypes {
    id: string;
    name: string;
};

const initialState: UserTypes[] = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer