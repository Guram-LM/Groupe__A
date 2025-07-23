import { useMemo, useState, type FormEvent } from 'react'
import type { CourierType, DaySchedule } from './CourierInterface'
import FormPage from '../../form/Form'
import { Button, Box, Paper, Typography } from '@mui/material'
import CourierTaim from './CourierTaim'
import CourierVehicle from './CourierVehicle'
import type { InputeType } from '../../form/FormInterface'
import { useAppDispatch } from '../../store/ReduxHook'
import { createUser } from '../../store/thanks/post/Post-Thamk'
import { toast } from 'react-toastify'

export const CourierRegistration = () => {
  const [couriers, setCouriers] = useState<CourierType>({
    firstName: "",
    lastName: "",
    pid: "",
    phoneNumber: "",
    email: "",
    password: "",
    profileImage: "",
    role: "courier",
    vehicle: "",
    Beschäftigt: false,
    workingDays: [],
  })

  const cangeWorkDay = (workingDays: DaySchedule[]) => {
    setCouriers((prev) => ({ ...prev, workingDays }))
  }

  const dispatch = useAppDispatch()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const action = await dispatch(createUser({ role: "courier", sendData: couriers }))

    if (createUser.fulfilled.match(action)) {
      toast.success("წარმატებული რეგისტრაცია")
      setCouriers({
        firstName: "",
        lastName: "",
        pid: "",
        phoneNumber: "",
        email: "",
        password: "",
        profileImage: "",
        role: "courier",
        vehicle: "",
        Beschäftigt: false,
        workingDays: [],
      })
    } else {
      toast.info("დაფიქსირდა შეცდომა")
    }
  }

  const inpute: InputeType<CourierType>[] = [
    { type: "text", name: "profileImage", label: "profileImage" },
    { type: "text", name: "firstName", label: "firstName" },
    { type: "text", name: "lastName", label: "lastName" },
    { type: "text", name: "pid", label: "pid" },
    { type: "number", name: "phoneNumber", label: "phoneNumber" },

    {
      type: "custom",
      component: (
        <CourierVehicle
          value={couriers.vehicle}
          onChange={(val) => setCouriers(prev => ({ ...prev, vehicle: val }))}
        />
      ),
    },

    {
      type: "custom",
      component: (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Typography variant="h6" align="center" gutterBottom>
              სამუშაო დღეები და საათები
            </Typography>
            <CourierTaim onchange={cangeWorkDay} />
          </Box>
        </Box>
      ),
    },

    { type: "email", name: "email", label: "email" },
    { type: "password", name: "password", label: "password" },
  ]

  const FormButton = useMemo(() => {
    return (
      <Button variant="contained" color="primary" type="submit">
        Create Profile
      </Button>
    )
  }, [])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e0f2fe, #f0f9ff)",
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
          value={couriers}
          onChange={setCouriers}
          inpute={inpute}
          FormButton={FormButton}
          onSubmit={onSubmit}
        />
      </Paper>
    </Box>
  )
}
