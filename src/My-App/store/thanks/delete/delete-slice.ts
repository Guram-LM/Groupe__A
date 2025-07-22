import { createSlice } from "@reduxjs/toolkit";
import { deleteThank, type ResposeType } from "./delete-Thanks";

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
const deleteSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {
    resetUserState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteThank.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteThank.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.user = undefined;
      })
      .addCase(deleteThank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export default deleteSlice.reducer