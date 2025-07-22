import { Outlet } from "react-router-dom"
import AdminSidbar from "../../components/adminSidbar/AdminSidbar"

const AdminLayout = () => {
  return (
    <main>
        <AdminSidbar/>
        <Outlet/>
    </main>
    
  )
}

export default AdminLayout