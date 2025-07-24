import { type JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../store/ReduxHook'


interface RouteProps {
    userRole: string
    children: JSX.Element
}

const ProtectedRoute  = ({children,  userRole}: RouteProps) => {
  const userDatas = useAppSelector(state => state.autorisation.user)
  if(!userDatas) return <Navigate to="/validationPage" replace/>
  if(userDatas.role !== userRole) return <Navigate to="/" replace/>
  return children
}

export default ProtectedRoute 