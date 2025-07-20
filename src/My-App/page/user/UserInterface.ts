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

export interface IUserRouResponseType {
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
export interface LocationInputeType {
    type: string
    label: string
    name: keyof UseLocation
}
