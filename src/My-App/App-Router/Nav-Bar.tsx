import { Route, Routes } from "react-router-dom"
import UserRegistration from "../page/user/UserRegistration"
import App_Leyout from "../page/app_leyout/App_Leyout"
import UserList from "../page/user/UserList"
import { CourierRegistration } from "../page/corurier/CourierRegistration"
import CourierList from "../page/corurier/CourierList"
import AdminRegistration from "../page/admin/AdminRegistration"
import AdminList from "../page/admin/AdminList"
import DeliverRequest from "../page/deliveri/DeliverRequest"
import LogonPage from "../page/login/LogonPage"



const NavBar = () => {
  return (
    <Routes>
      <Route path="/" element={<App_Leyout/>} >
        <Route index element={<UserList/>}  />
        <Route path="registeration" element={<UserRegistration/>} />
        <Route path="courierRegistration" element={<CourierRegistration/>} />
        <Route path="couriersList" element={<CourierList/>} />
        <Route path="adminRegistration" element={<AdminRegistration/>} />
        <Route path="adminList" element={<AdminList/>} />
        <Route path="deliverRequest" element={<DeliverRequest/>} />
        <Route path="logonPage" element={<LogonPage/>} />


      </Route>
        

    </Routes>
  )
}

export default NavBar