import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./thanks/post/Post-slice"
const root = combineReducers({
    post: postSlice
})

export const store = configureStore({
    reducer: root
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



