import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const slice = createSlice({
    name: 'app',
    initialState: {
        users: []
    },
    reducers: {
        saveData: (state, action) => {
            state.users = action.payload;
        },
    },
});

export default slice.reducer;

export const { saveData } = slice.actions;

export const getUsers = payload => async dispatch => {
    console.log("Getting data to be rendered on table")
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        return { data: result.data }
    } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
        return {error: "Failed to get table data"}
    }
};
