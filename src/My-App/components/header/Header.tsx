import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderButton from './HeaderButton'
import { Box, Avatar, IconButton } from '@mui/material'
import { useState } from 'react'
import UserMenu from '../MenuButton/UserMenu'


const Header = () => {
  const getItem = localStorage.getItem('geste')
  const appgest = getItem ? JSON.parse(getItem) : null
  const gestName = appgest?.firstName?.[0]?.toUpperCase() || ''

  
  const [menuButton, setmenuButton] = useState<null | HTMLElement>(null)

  const Click = (event: React.MouseEvent<HTMLElement>) => {
    setmenuButton(event.currentTarget)
  }

  const onClose = () => {
    setmenuButton(null)
  }

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
        <>

          <IconButton onClick={Click}>
            <Avatar sx={{ bgcolor: 'white', color: '#1976d2' }}>
              {gestName}
            </Avatar>
          </IconButton>

         
          <UserMenu menuButton={menuButton} onClose={onClose} />
        </>
      ) : (
        <HeaderButton />
      )}
    </Box>
  )
}

export default Header
