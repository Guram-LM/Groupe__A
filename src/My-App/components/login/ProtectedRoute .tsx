import { type JSX } from 'react'
import { Navigate } from 'react-router-dom'
import type { UserResponseType } from '../../page/user/UserInterface'
import type { CourierResponseType } from '../../page/corurier/CourierInterface'
import type { AdminResponseType } from '../../page/admin/AdminInterface'

interface RouteProps {
    userDatas: UserResponseType | CourierResponseType | AdminResponseType | null
    userRole: string
    children: JSX.Element
}

const ProtectedRoute  = ({children, userDatas, userRole}: RouteProps) => {
  if(!userDatas) return <Navigate to="/validationPage" replace/>
  if(userDatas.role !== userRole) return <Navigate to="/" replace/>
  return children
}

export default ProtectedRoute 