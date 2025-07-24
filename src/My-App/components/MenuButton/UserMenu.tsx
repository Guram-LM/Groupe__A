import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../store/ReduxHook'
import { logout } from '../../store/autorisation/Autorisation'


interface UserMenuProps {
  menuButton: null | HTMLElement
  onClose: () => void
}

const UserMenu: React.FC<UserMenuProps> = ({ menuButton, onClose }) => {
  const open = Boolean(menuButton)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.autorisation.user)
  const role = user?.role

  const Logoute = () => {
    localStorage.removeItem('geste')
    dispatch(logout()) 
    onClose()
    navigate('/')
  }

  const goToProfile = () => {
    onClose()

    if (role === 'user') {
      navigate('/user/userProfile')
    } else if (role === 'courier') {
      navigate('/courier/CouriersProfile')
    } else if (role === 'admin') {
      navigate('/admin/adminProfile')
    } else {
      navigate('/')
    }
  }

  return (
    <Menu
      anchorEl={menuButton}
      open={open}
      onClose={onClose}
      PaperProps={{
        elevation: 3,
        sx: {
          mt: 1.5,
          minWidth: 160,
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={goToProfile}>პროფილი</MenuItem>
      <MenuItem onClick={Logoute}>გამოსვლა</MenuItem>
    </Menu>
  )
}

export default UserMenu
