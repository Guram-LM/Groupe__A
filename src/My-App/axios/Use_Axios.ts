
import type { AdminResponseType, AdminType } from "../page/admin/AdminInterface";
import type { CourierResponseType, CourierType } from "../page/corurier/CourierInterface";
import type { BeschtelenType } from "../page/deliveri/BezahlenPage";
import type { UserResponseType, UserType } from "../page/user/UserInterface";
import { My_Axios } from "./My_Axios";

export type SendDataType = UserResponseType | CourierResponseType | AdminResponseType 
export type postDataType =  UserType | CourierType | AdminType | BeschtelenType
export type RoleType = "user" |  "admin" | "courier" |"beschtelen"

export const Use_Axios ={
    post: (role: RoleType, sendData: postDataType) => 
          My_Axios.post(`/resource/${role}`, {data: [sendData]}),
    delete: (role: RoleType, sendData: SendDataType) =>
        My_Axios.delete(`/resource/${role}/${sendData.id}`),
    put: (role: RoleType, sendData: SendDataType & { id: string }) =>
        My_Axios.put(`/resource/${role}/${sendData.id}`, { data: sendData }),
}
