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

export const updateThankh = createAsyncThunk(
  "update/requst",
  async ({ role, sendData }: PropsType, thunk) => {
    try {
      const response = await Use_Axios.put(role, sendData);
      return response.data as ResposeType;
    } catch (error) {
      return thunk.rejectWithValue("მონაცემების განახლება ვერ განხორციელდა");
    }
  }
);