import { useMemo, useState, type FormEvent } from 'react'
import type { CourierType, DaySchedule } from './CourierInterface'
import FormPage from '../../form/Form'
import type { InputeType } from '../../interface/interface'
import { Button } from '@mui/material'
import CourierTaim from './CourierTaim'


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
        workingDays: [],
    })

    const cangeWorkDay = (workingDay: DaySchedule[]) => {
        setCouriers((prev) =>({...prev,workingDay }))
    }

    const onSubmit= (e: FormEvent<HTMLFormElement>) =>{
        e. preventDefault()
        console.log(couriers)

    }
    const inpute:InputeType[] = [
     {type:"text", name: "profileImage", label:"profileImage" } ,
     {type:"text", name: "firstName", label:"firstName" } ,
     {type:"text", name: "lastName", label:"lastName" } ,
     {type:"text", name: "pid", label:"pid" } ,
     {type:"number", name: "phoneNumber", label:"phoneNumber" } ,
     {type:"text", name: "vehicle", label:"vehicle" } ,



    {type:"custom", component:(
        <CourierTaim onchange={cangeWorkDay}/>
    )},

     {type:"email", name: "email", label:"email" } ,
     {type:"password", name: "password", label:"password" } ,
    
]
    const FormButton= useMemo(() => {
        return <Button type="submit">Create Profile</Button>
    }, [])

  return (
    <FormPage value={couriers} onChange={setCouriers} inpute={inpute} FormButton= {FormButton} onSubmit={onSubmit} />
    
  )
}
