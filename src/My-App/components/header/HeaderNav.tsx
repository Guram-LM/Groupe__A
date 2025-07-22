import { NavLink } from 'react-router-dom'
import { Box, Button } from '@mui/material'

interface NavProps {
  path: string
  name: string
}

const headerNav: NavProps[] = [
  { name: 'Home', path: '/home' },
  { name: 'About', path: '/aboutPage' },
  { name: 'Contact', path: '/contactPage' }
]

const HeaderNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {headerNav.map((item) => (
        <Button
          key={item.path}
          component={NavLink}
          to={item.path}
          sx={{
            color: 'white',
            textTransform: 'none',
            '&.active': {
              fontWeight: 'bold',
              borderBottom: '2px solid white',
            }
          }}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  )
}

export default HeaderNav