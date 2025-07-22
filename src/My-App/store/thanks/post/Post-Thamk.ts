import { createAsyncThunk } from "@reduxjs/toolkit";
import { Use_Axios, type RoleType, type SendDataType } from "../../../axios/Use_Axios";
import type { UserType } from "../../../page/user/UserInterface";
export interface ResposeType {
    success: boolean,
    message: string,
    data?: UserType
}
interface PropsType {
   role: RoleType
   sendData: SendDataType
}
export const createUser = createAsyncThunk(
    "create/user",
    async ({role, sendData}:PropsType, thank) => {
       try {
        const response = await Use_Axios.post(role, sendData)
        return response.data as ResposeType
       } catch (error) {
        return thank.rejectWithValue("მონაცემები ვერ გაიგზავნა")
       }
    }
)