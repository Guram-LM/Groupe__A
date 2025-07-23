
import type { AdminResponseType } from "../page/admin/AdminInterface";
import type { CourierResponseType } from "../page/corurier/CourierInterface";
import type { BeschtelenType } from "../page/deliveri/BezahlenPage";
import type { UserResponseType } from "../page/user/UserInterface";
import { My_Axios } from "./My_Axios";

export type SendDataType = UserResponseType | CourierResponseType | AdminResponseType | BeschtelenType
export type RoleType = "user" |  "admin" | "courier" |"beschtelen"

export const Use_Axios ={
    post: (role: RoleType, sendData: SendDataType) => 
          My_Axios.post(`/resource/${role}`, {data: [sendData]}),
    delete: (role: RoleType, sendData: SendDataType) =>
        My_Axios.delete(`/resource/${role}/${sendData.id}`),
    put: (role: RoleType, sendData: SendDataType) =>
         My_Axios.put(`/resource/${role}`, { data: [sendData] }),
}