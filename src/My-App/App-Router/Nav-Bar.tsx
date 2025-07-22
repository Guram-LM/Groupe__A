import { Route, Routes } from "react-router-dom"
import UserRegistration from "../page/user/UserRegistration"
import App_Leyout from "../page/app_leyout/App_Leyout"
import UserList from "../page/user/UserList"
import { CourierRegistration } from "../page/corurier/CourierRegistration"
import CourierList from "../page/corurier/CourierList"
import AdminRegistration from "../page/admin/AdminRegistration"
import AdminList from "../page/admin/AdminList"
import DeliverRequest from "../page/deliveri/DeliverRequest"
import type { UserResponseType } from "../page/user/UserInterface"
import type { CourierResponseType } from "../page/corurier/CourierInterface"
import type { AdminResponseType } from "../page/admin/AdminInterface"
import UserProfile from "../page/user/UserProfile"
import UserLayout from "../page/user/UserLayout"
import WehlenRegisterStatus from "../components/registration/WehlenRegisterStatus"
import HomePage from "../page/home/HomePage"
import ValidationPage from "../components/login/ValidationPage"
import ProtectedRoute from "../components/login/ProtectedRoute "




const NavBar = () => {

  const geste = JSON.parse(localStorage.getItem("geste") || "null") as UserResponseType | CourierResponseType | AdminResponseType | null
  return (
    <Routes>







      <Route path="/" element={<App_Leyout/>} >

        <Route index element={<HomePage/>}  />
        <Route path="validationPage" element={<ValidationPage/>} />
        <Route path="wehlenRegisterStatus" element={<WehlenRegisterStatus/>} />
        <Route path="userRegistration" element={<UserRegistration/>} />
        <Route path="courierRegistration" element={<CourierRegistration/>} />
        <Route path="adminRegistration" element={<AdminRegistration/>} />

        <Route path="user" element={
          <ProtectedRoute userDatas={geste} userRole="user">
            <UserLayout/>
          </ProtectedRoute>
        }>


            <Route path="userProfile" element={<UserProfile/>} />
            <Route path="deliverRequest" element={<DeliverRequest/>} />
        </Route>
 
        




      </Route>


        <Route path="couriersList" element={<CourierList/>} />
        <Route path="userList" element={<UserList/>} />
        <Route path="adminList" element={<AdminList/>} />
        
        

    </Routes>
  )
}

export default NavBar