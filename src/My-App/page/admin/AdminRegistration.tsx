import { useMemo, useState, type FormEvent } from 'react'
import FormPage from '../../form/Form'
import type { AdminType } from './AdminInterface'
import type { InputeType } from '../../form/FormInterface'
import { Button, Paper, Box } from '@mui/material'
import { useAppDispatch } from '../../store/ReduxHook'
import { createUser } from '../../store/thanks/post/Post-Thamk'
import { toast } from 'react-toastify'
import { validateAdmin } from './ValidateAdmin'

const AdminRegistration = () => {
  const [admin, setAdmin] = useState<AdminType>({
    firstName: "",
    lastName: "",
    pid: "",
    phoneNumber: "",
    email: "",
    password: "",
    profileImage: "",
    role: "admin"
  })

  const dispatch = useAppDispatch()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const error = validateAdmin(admin);
        if (error) {
          toast.warn(error);
          return;
        }

    const action = await dispatch(createUser({ role: "admin", sendData: admin }))

    if (createUser.fulfilled.match(action)) {
      toast.success("წარმატებული რეგისტრაცია")

      setAdmin({
        firstName: "",
        lastName: "",
        pid: "",
        phoneNumber: "",
        email: "",
        password: "",
        profileImage: "",
        role: "admin"
      })
    } else {
      toast.info("დაფიქსირდა შეცდომა")
    }
  }

  const FormButton = useMemo(() => {
    return <Button variant="contained" color="primary" type="submit">Create Profile</Button>
  }, [])

  const inpute: InputeType<AdminType>[] = [
    { type: "text", name: "profileImage", label: "profileImage" },
    { type: "text", name: "firstName", label: "firstName" },
    { type: "text", name: "lastName", label: "lastName" },
    { type: "text", name: "pid", label: "pid" },
    { type: "number", name: "phoneNumber", label: "phoneNumber" },
    { type: "email", name: "email", label: "email" },
    { type: "password", name: "password", label: "password" },
  ]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)",
        padding: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 600,
          width: "100%",
          backgroundColor: "#ffffffcc",
        }}
      >
        <FormPage
          FormButton={FormButton}
          inpute={inpute}
          onChange={setAdmin}
          onSubmit={onSubmit}
          value={admin}
        />
      </Paper>
    </Box>
  )
}

export default AdminRegistration
