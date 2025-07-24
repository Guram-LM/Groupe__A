import { createSlice } from "@reduxjs/toolkit";
import { updateThankh, type ResposeType } from "./updata-Thants";

interface StateType {
  loading: boolean;
  error: string | null;
  success: boolean;
  message: string;
  user?: ResposeType["data"];
}
const initialState: StateType = {
  loading: false,
  error: null,
  success: false,
  message: "",
};
const updateSlice = createSlice({
  name: "updata",
  initialState,
  reducers: {
    resetUserState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateThankh.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateThankh.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.user = action.payload.data;
      })
      .addCase(updateThankh.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
})

export default updateSlice.reducer