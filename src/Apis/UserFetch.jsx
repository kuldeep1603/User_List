import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const FetchUser = createAsyncThunk("FetchUser", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
});

export const FetchUserDeatils = createAsyncThunk("FetchUserDeatils", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
});


const UserFetch = createSlice({
    name: 'user/fetch',
    initialState: {
        User: [],
        IsLoading: false,
        IsError: false,
        UserSearch: "",
        UserDetails: {},
    },
    reducers: {
        SetUserSearch: (state, action) => {
            state.UserSearch = action.payload
        }
    },
    extraReducers: (builder) => {
        // FetchProduct
        builder.addCase(FetchUser.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchUser.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsError = false;
            state.User = action.payload;
        });
        builder.addCase(FetchUser.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });

        // FetchUserDeatils
        builder.addCase(FetchUserDeatils.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchUserDeatils.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsError = false;
            state.UserDetails = action.payload;
        });
        builder.addCase(FetchUserDeatils.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });
    }
});

export const { SetUserSearch } = UserFetch.actions;
export default UserFetch.reducer;