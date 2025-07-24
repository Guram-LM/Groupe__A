import { Outlet } from "react-router-dom"
import AdminSidbar from "../../components/adminSidbar/AdminSidbar"
import { Box, Toolbar } from "@mui/material"

const AdminLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSidbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default AdminLayout
