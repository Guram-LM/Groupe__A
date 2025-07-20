import { Route, Routes } from "react-router-dom"
import UserRegistration from "../page/user/UserRegistration"
import App_Leyout from "../page/app_leyout/App_Leyout"
import UserList from "../page/user/UserList"



const NavBar = () => {
  return (
    <Routes>
      <Route path="/" element={<App_Leyout/>} >
        <Route index element={<UserList/>}  />
        <Route path="registeration" element={<UserRegistration/>} />
      </Route>
        

    </Routes>
  )
}

export default NavBar