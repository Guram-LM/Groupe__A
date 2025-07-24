import type { BeschtelenType } from "../deliveri/BezahlenPage";


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

export interface BeschtelenRouResponseType {
  id: string;
  resource: string;
  data: BeschtelenType;
  createdAt: string;
  updatedAt: string;
}

export interface BeschtelenResponseType extends BeschtelenType {
  id: string;
}

export interface AdminRouResponseType {
  id: string;
  resource: string;
  data: AdminType;
  createdAt: string;
  updatedAt: string;
}

export interface AdminResponseType extends AdminType {
  id: string;
}