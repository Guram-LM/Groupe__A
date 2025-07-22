import { useEffect, useState } from 'react'
import { useGetAdminQuery, useGetCouriersQuery, useGetUserQuery } from '../../store/RT_query/query'
import LogonPage from './LogonPage'
import { useNavigate } from 'react-router-dom'
import type { UserResponseType } from '../../page/user/UserInterface'
import type { CourierResponseType } from '../../page/corurier/CourierInterface'
import type { AdminResponseType } from '../../page/admin/AdminInterface'

const ValidationPage = () => {

    const {data: users= [], isLoading: ussersLoadingi} = useGetUserQuery()
    const {data: couriers = [], isLoading: couriersLoading} = useGetCouriersQuery()
    const {data: admins = [], isLoading: adminsLoadingi} = useGetAdminQuery()

    const [validUser, setValidUser] = useState<UserResponseType | CourierResponseType | AdminResponseType | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        if(validUser) {
            localStorage.setItem("geste", JSON.stringify(validUser))
            if(validUser.role === "user")  navigate("/user")
            else if(validUser.role === "courier")  navigate("/courier")
            else if(validUser.role === "admin")  navigate("/admin")
        }
    }, [validUser, navigate])




    if (ussersLoadingi || couriersLoading || adminsLoadingi)  return <h1>Loading.....</h1>
  return (
    <>
    <LogonPage admins={admins} couriers={couriers} users={users} identificiren={setValidUser} />
    </>
  )
}

export default ValidationPage