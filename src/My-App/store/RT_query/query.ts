import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, BASE_URL } from "../../Appy_Key/Appy_Key";
import type { IUserResponseType, UserResponseType } from "../../interface/interface";

export const Get_Response = createApi({
    reducerPath: "getApi",
    baseQuery: fetchBaseQuery({
        baseUrl:BASE_URL,
        prepareHeaders: (header) => {
            header.set("x-bypass-token", API_KEY)
            return header
        }
    
    }),
   
    
    endpoints: (builder) => ({

       getUser: builder.query<UserResponseType[], void>({
        query: () => "/resource/user",
        transformResponse: (response: IUserResponseType[]) =>
            response.map((item) => ({ id: item.id, ...item.data })),
        })

    })
})

export const {useGetUserQuery} = Get_Response
