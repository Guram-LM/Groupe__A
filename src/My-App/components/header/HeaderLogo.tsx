import { Box } from '@mui/material'
import logo from '../../../assets/logo2.png'

const HeaderLogo = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        bgcolor: '#524d4d',        
        border: '2px solid #524d4d', 
        padding: 1,              
        borderRadius: 2,       
        '& img': {
          height: 40,           
          userSelect: 'none',
        },
      }}
    >
      <img src={logo} alt="logo" />
    </Box>
  )
}

export default HeaderLogo
