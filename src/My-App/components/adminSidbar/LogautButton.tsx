import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LogautButton = () => {

    const navigate = useNavigate()
  
    const Logout = () => {
    localStorage.removeItem('geste')
    navigate('/')
  }
  return <Button onClick={Logout}>გასვლა</Button>
}

export default LogautButton