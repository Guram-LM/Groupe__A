import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/ReduxHook'
import { logout } from '../../store/autorisation/Autorisation'


const LogautButton = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    localStorage.removeItem('geste')   
    dispatch(logout())                 
    navigate('/')
  }

  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Button
        variant="contained"
        color="error"
        onClick={handleLogout}
        fullWidth
      >
        გასვლა
      </Button>
    </Box>
  )
}

export default LogautButton
