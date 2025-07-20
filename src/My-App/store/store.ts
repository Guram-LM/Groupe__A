import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./thanks/post/Post-slice"
import { Get_Response } from "./RT_query/query";
const root = combineReducers({
    post: postSlice,
    [Get_Response.reducerPath]: Get_Response.reducer
})

export const store = configureStore({
    reducer: root,
    middleware: (getDefoultmiddleware) => getDefoultmiddleware().concat(Get_Response.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



