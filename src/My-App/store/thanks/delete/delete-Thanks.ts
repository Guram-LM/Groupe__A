
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Use_Axios, type RoleType, type SendDataType } from "../../../axios/Use_Axios";
import type { UserType } from "../../../page/user/UserInterface";



interface PropsType {
  role: RoleType;
  sendData: SendDataType;
}

export interface ResposeType {
  success: boolean;
  message: string;
  data?: UserType;
}

export const deleteThank = createAsyncThunk(
  "delete/request",
  async ({ role, sendData }: PropsType, thunk) => {
    try {
      const response = await Use_Axios.delete(role, sendData);
      return response.data as ResposeType;
    } catch (error) {
      return thunk.rejectWithValue("მონაცემების წაშლა ვერ განხორციელდა");
    }
  }
);