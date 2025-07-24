import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./thanks/post/Post-slice"
import { Get_Response } from "./RT_query/query";
import deleteSlice from "./thanks/delete/delete-slice"
import updateSlice from "./thanks/update/update-slice"
import authSlice from "./autorisation/Autorisation"
import couriersSlice from "./thanks/beschediktCouriers/BeschediktCouriers"


const root = combineReducers({
    post: postSlice,
    delete: deleteSlice,
    updata:updateSlice,
    autorisation: authSlice,
    beschediktCourier: couriersSlice,
    [Get_Response.reducerPath]: Get_Response.reducer
})

export const store = configureStore({
    reducer: root,
    middleware: (getDefoultmiddleware) => getDefoultmiddleware().concat(Get_Response.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



