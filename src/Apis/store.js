import { configureStore } from "@reduxjs/toolkit";


// slice 
import UserFetchReducer from "./UserFetch";
import PostFetchReducer from "./PostFetch";

const store = configureStore({
    reducer: {
        userFetch: UserFetchReducer,
        postFetch: PostFetchReducer,
    }
});

export default store;