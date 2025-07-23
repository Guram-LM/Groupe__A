import { useMemo, useState, type FormEvent } from "react"
import FormPage from "../../form/Form"
import { Button, Box, Typography } from "@mui/material"
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
    role: "user",
  })

  const onChange = (loc: UseLocation) => {
    setUserData((prev) => ({
      ...prev,
      ...loc,
    }))
  }

  const dispatch = useAppDispatch()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const action = await dispatch(createUser({ role: "user", sendData: userData }))
    if (createUser.fulfilled.match(action)) {
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
        role: "user",
      })
    } else {
      toast.info("დაფიქსირდა შეცდომა")
    }
  }

  const FormButton = useMemo(() => {
    return (
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          px: 4,
          py: 1.5,
          backgroundColor: "#1e88e5",
          "&:hover": { backgroundColor: "#1565c0" },
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: 2,
        }}
      >
        Create Profile
      </Button>
    )
  }, [])

  const inpute: InputeType<UserType>[] = [
    { type: "text", name: "profileImage", label: "Profile Image URL" },
    { type: "text", name: "firstName", label: "First Name" },
    { type: "text", name: "lastName", label: "Last Name" },
    { type: "text", name: "pid", label: "Personal ID" },
    { type: "number", name: "phoneNumber", label: "Phone Number" },
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" },
  ]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #bbdefb 0%, #e3f2fd 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 480,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            color: "#1565c0",
          }}
        >
          რეგისტრაცია
        </Typography>

        <Box
          sx={{
            bgcolor: "#f0f7ff",
            borderRadius: 2,
            px: 2,
            py: 1,
            mb: 3,
          }}
        >
          <UserLokation
            onChange={onChange}
            value={{
              country: userData.country,
              city: userData.city,
              street: userData.street,
            }}
          />
        </Box>

        <FormPage
          inpute={inpute}
          FormButton={FormButton}
          onSubmit={onSubmit}
          value={userData}
          onChange={setUserData}
        />
      </Box>
    </Box>
  )
}

export default UserRegistration
