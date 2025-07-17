import { useMemo } from "react"
import FormPage from "../form/Form"
import type { InputeType } from "../interface/interface"
import { Button } from "@mui/material"



const UserRegistration = () => {



    const FormButton= useMemo(() => {
        return <Button>Create Profile</Button>
    }, [])

    const inpute:InputeType[] = [
        {type: "text", name: "profileImage", label: "profileImage" },
        {type: "text", name: "firstName", label: "firstName" },
        {type: "text", name: "lastName", label: "lastName" },
        {type: "text", name: "pid", label: "pid" },
        {type: "number", name: "phoneNumber", label: "phoneNumber" },
        {type: "text", name: "address", label: "address" },
        {type: "text", name: "role", label: "role" },
        {type: "email", name: "email", label: "email" },
        {type: "password", name: "password", label: "password" },
    ]
  return (
    <FormPage inpute={inpute} FormButton={FormButton} />
  )
}

export default UserRegistration