import SidbarButton from './SidbarButton'
import { Drawer, Toolbar, Box } from '@mui/material'

const AdminSidbar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', p: 2 }}>
        <SidbarButton />
      </Box>
    </Drawer>
  )
}

export default AdminSidbar
