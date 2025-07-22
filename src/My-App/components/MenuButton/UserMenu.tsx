import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface UserMenuProps {
  menuButton: null | HTMLElement
  onClose: () => void
}

const UserMenu: React.FC<UserMenuProps> = ({ menuButton, onClose }) => {
  const open = Boolean(menuButton)
  const navigate = useNavigate()

  const getItem = localStorage.getItem('geste')
  const user = getItem ? JSON.parse(getItem) : null
  const role = user?.role

  const Logout = () => {
    localStorage.removeItem('geste')
    onClose()
    navigate('/')
  }

  const getProfile = () => {
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
      <MenuItem onClick={getProfile}>პროფილი</MenuItem>
      <MenuItem onClick={Logout}>გამოსვლა</MenuItem>
    </Menu>
  )
}

export default UserMenu
