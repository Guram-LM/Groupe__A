import { useMemo, useState, type FormEvent } from "react"
import FormPage from "../form/Form"
import type { InputeType, UseLocation, UserType } from "../interface/interface"
import { Button } from "@mui/material"
import Lokation from "./Lokation"



const UserRegistration = () => {

  const [userData, setUserData] = useState<UserType>({
    firstName: "",
    lastName: "",
    profileImage: "",
    pid: "",
    phoneNumber: "",
    email: "",
    password: "",
    country: "",
    city: "",
    street: "",
  })


  const onChange = (loc: UseLocation) => {
    setUserData((prev) => ({
      ...prev,
      ...loc
    }))
  }

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData)
  }



    const FormButton= useMemo(() => {
        return <Button type="submit">Create Profile</Button>
    }, [])

    const inpute:InputeType[] = [
        {type: "text", name: "profileImage", label: "profileImage" },
        {type: "text", name: "firstName", label: "firstName" },
        {type: "text", name: "lastName", label: "lastName" },
        {type: "text", name: "pid", label: "pid" },

        {type: "custom", component: <Lokation onChange={onChange} 
        value={{country: userData.country, city: userData.city, street: userData.street}}/>},

        {type: "number", name: "phoneNumber", label: "phoneNumber" },
        {type: "email", name: "email", label: "email" },
        {type: "password", name: "password", label: "password" },
    ]
  return (
    <FormPage inpute={inpute} FormButton={FormButton} onSubmit={onSubmit} value={userData} onChange={setUserData}/>
  )
}

export default UserRegistration