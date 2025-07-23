import { useMemo, useState, type FormEvent } from "react"
import FormPage from "../../form/Form"
import { Button } from "@mui/material"
import UserLokation from "./UserLokation"
import { useAppDispatch } from "../../store/ReduxHook"
import { createUser } from "../../store/thanks/post/Post-Thamk"
import { toast } from "react-toastify"
import type { UseLocation, UserType } from "./UserInterface"
import type { InputeType } from "../../form/FormInterface"



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
    role: "user"
  })


  const onChange = (loc: UseLocation) => {
    setUserData((prev) => ({
      ...prev,
      ...loc
    }))
  }

  const dispatch  = useAppDispatch()

  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const action = await dispatch(createUser({role: "user", sendData: userData}))
    if(createUser.fulfilled.match(action)) {
      toast.success("წარმატებული რეგისტრაცია")
      setUserData({
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
        role: "user"
      })
    } else {
        toast.info( "დაფიქსირდა შეცდომა");
      }
  }



    const FormButton= useMemo(() => {
        return <Button type="submit">Create Profile</Button>
    }, [])

    const inpute:InputeType<UserType>[] = [
        {type: "text", name: "profileImage", label: "profileImage" },
        {type: "text", name: "firstName", label: "firstName" },
        {type: "text", name: "lastName", label: "lastName" },
        {type: "text", name: "pid", label: "pid" },

        {type: "custom", component: <UserLokation onChange={onChange} 
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