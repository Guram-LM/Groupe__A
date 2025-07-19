import axios from "axios";
import { API_KEY, BASE_URL } from "../Appy_Key/Appy_Key";

export const My_Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "x-bypass-token": API_KEY,
    }
})