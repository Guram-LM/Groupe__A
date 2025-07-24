import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

interface RegisterButtonType {
  url: string
  name: string
  color: 'primary' | 'secondary' | 'success' 
}

const registerrButt: RegisterButtonType[] = [
  { name: 'რეგისტრაცია როგორც იუზერი', url: '/userRegistration', color: 'primary' },
  { name: 'რეგისტრაცია როგორც კურიერი', url: '/courierRegistration', color: 'secondary' },
  { name: 'რეგისტრაცია როგორც ადმინი', url: '/adminRegistration', color: 'success' },
]

const WehlenRegisterStatus = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 5,
        justifyContent: 'center',
        width: '100%',
        maxWidth: 700,
        mx: 'auto',
        mt: 20, 
        p: 2,
      }}
    >
      {registerrButt.map((item) => (
        <Button
          key={item.url}
          component={Link}
          to={item.url}
          variant="contained"
          color={item.color}
          size="large"   
          sx={{
            padding: 3,
            textTransform: 'none',
            flex: '1 1 250px', 
            minWidth: 180,
          }}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  )
}

export default WehlenRegisterStatus
