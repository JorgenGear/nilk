import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.unshift({
                id: Date.now(),
                username: 'CurrentUser', // We'll update this when we add authentication
                content: action.payload,
                timestamp: Date.now(),
            });
        },
    },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;