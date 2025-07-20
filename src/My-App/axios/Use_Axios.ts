import type { AdminType } from "../page/admin/AdminInterface";
import type { CourierType } from "../page/corurier/CourierInterface";
import type { UserType } from "../page/user/UserInterface";
import { My_Axios } from "./My_Axios";

export type SendDataType = UserType |  CourierType | AdminType
export type RoleType = "user" |  "admin" | "courier"

export const Use_Axios ={
    post: (role: RoleType, sendData: SendDataType) => 
          My_Axios.post(`/resource/${role}`, {data: [sendData]})
}