import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LogautButton = () => {
  const navigate = useNavigate()

  const Logout = () => {
    localStorage.removeItem('geste')
    navigate('/')
  }

  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Button
        variant="contained"
        color="error"
        onClick={Logout}
        fullWidth
      >
        გასვლა
      </Button>
    </Box>
  )
}

export default LogautButton
