import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { createUser, type ResposeType } from "./Post-Thamk"
interface StateType {
    loading: boolean,
    error: string | null,
    response: ResposeType | null,
}
const state: StateType = {
    response: null,
    loading: false,
    error: null
}
const postSlice = createSlice({
    name: "post",
    initialState: state,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state) => {
            state.error = null;
            state.loading = true
        })
        .addCase(createUser.fulfilled, (state, action: PayloadAction<ResposeType>) => {
            state.error = null;
            state.loading = false;
            state.response = action.payload
        })
        .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string
        })
    }
})
export default postSlice.reducer