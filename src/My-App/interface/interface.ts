export interface InputeType {
    type: string
    label: string
    name: keyof UserType
}

export interface UserType {
    firstName: string, 
    lastName: string, 
    pid: string,
    phoneNumber: string, 
    email: string, 
    password: string, 
    profileImage: string, 
    role: string,
    address: string
}