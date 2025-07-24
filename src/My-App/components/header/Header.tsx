import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderButton from './HeaderButton'
import { Box, Avatar, IconButton } from '@mui/material'
import { useState } from 'react'
import UserMenu from '../MenuButton/UserMenu'
import { useAppSelector } from '../../store/ReduxHook'

const Header = () => {
  const user = useAppSelector((state) => state.autorisation.user)
  const gestName = user?.firstName?.[0]?.toUpperCase() || ''

  const [menuButton, setMenuButton] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuButton(event.currentTarget)
  }

  const handleClose = () => {
    setMenuButton(null)
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

      {user ? (
        <>
          <IconButton onClick={handleClick}>
            <Avatar sx={{ bgcolor: 'white', color: '#1976d2' }}>
              {gestName}
            </Avatar>
          </IconButton>

          <UserMenu menuButton={menuButton} onClose={handleClose} />
        </>
      ) : (
        <HeaderButton />
      )}
    </Box>
  )
}

export default Header
