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