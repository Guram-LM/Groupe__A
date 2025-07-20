import type { ReactNode } from "react"


export interface BasecType {
    type: "text" | "number" | "email" |"password"
    label: string
    name: keyof UserType
}
export interface AdditionalType {
    type: "custom"
    component?: ReactNode
}


export type InputeType = BasecType | AdditionalType






export interface LocationInputeType {
    type: string
    label: string
    name: keyof UseLocation
}


export interface UserType {
    firstName: string, 
    lastName: string, 
    pid: string,
    phoneNumber: string, 
    email: string, 
    password: string, 
    profileImage: string, 
    country: string,
    city: string,
    street: string,
    role: "user";    
}




export interface AdminType {
  firstName: string;
  lastName: string;
  pid: string; 
  phoneNumber: string;
  email: string;
  password: string;
  profileImage: string;
  role: "admin";
}

export interface IUserResponseType {
  id: string;
  resource: string;
  data: UserType;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponseType extends UserType {
  id: string;
}








export interface UseLocation {
    country: string,
    city: string,
    street: string,
}

export interface LocationType {
    country: string,
    city: string,
    street: string,
    postIndex: string
}
