import { createAsyncThunk } from "@reduxjs/toolkit";
import { type RoleType, type SendDataType } from "../../../axios/Use_Axios";
import type { UserType } from "../../../page/user/UserInterface";
import { Use_Axios } from "../../../axios/Use_Axios"; 

interface PropsType {
  role: RoleType;
  sendData: SendDataType & { id: string };
}

export interface ResposeType {
  success: boolean;
  message: string;
  data?: UserType;
}

export const updateThankh = createAsyncThunk(
  "update/request",
  async ({ role, sendData }: PropsType, thunk) => {
    try {
      const response = await Use_Axios.put(role, sendData); 
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue("მონაცემების განახლება ვერ განხორციელდა");
    }
  }
);
