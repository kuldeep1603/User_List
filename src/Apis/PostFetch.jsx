import { createSlice } from "@reduxjs/toolkit";


import { createAsyncThunk } from "@reduxjs/toolkit";


export const FetchPost = createAsyncThunk("FetchPost", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
});



const PostFetch = createSlice({
    name: "PostFetch",
    initialState: {
        posts: [],
        IsLoading: false,
        IsError: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(FetchPost.pending, (state) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchPost.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.posts = action.payload;
        });
        builder.addCase(FetchPost.rejected, (state) => {
            state.IsLoading = false;
            state.IsError = true;
        });
    }
});

export default PostFetch.reducer;