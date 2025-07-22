import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderButton from './HeaderButton'
import { Box, Avatar } from '@mui/material'

const Header = () => {
  const getItem = localStorage.getItem('geste')
  const appgest = getItem ? JSON.parse(getItem) : null
  const gestName = appgest?.name?.[0]?.toUpperCase() || ''

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        height: 64,
        bgcolor: '#1976d2',
        color: 'white',
      }}
    >
      <HeaderLogo />
      <HeaderNav />
      {appgest ? (
        <Avatar sx={{ bgcolor: 'white', color: '#1976d2' }}>
          {gestName}
        </Avatar>
      ) : (
        <HeaderButton />
      )}
    </Box>
  )
}

export default Header