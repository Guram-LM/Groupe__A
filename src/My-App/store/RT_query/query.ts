import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, BASE_URL } from "../../Appy_Key/Appy_Key";
import type { IUserRouResponseType, UserResponseType } from "../../page/user/UserInterface";
import type { CourierResponseType, CourierRouResponseType } from "../../page/corurier/CourierInterface";
import type { AdminResponseType, AdminRouResponseType } from "../../page/admin/AdminInterface";


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
        transformResponse: (response: IUserRouResponseType[]) =>
            response.map((item) => ({ id: item.id, ...item.data })),
        }),

        getCouriers: builder.query<CourierResponseType[], void>({
            query: () => "/resource/courier",
            transformResponse: (response: CourierRouResponseType[]) => 
                response.map(item => ({id: item.id, ...item.data}))
        }),

        getAdmin: builder.query<AdminResponseType[], void>({

            query: () => "/resource/admin",
            transformResponse: (resource: AdminRouResponseType[]) => 
                resource.map(item => ({id: item.id, ...item.data}))
        })

    })
})

export const {useGetUserQuery, useGetCouriersQuery, useGetAdminQuery} = Get_Response
