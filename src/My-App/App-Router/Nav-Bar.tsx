import { Route, Routes } from "react-router-dom"
import UserRegistration from "../page/UserRegistration"


const NavBar = () => {
  return (
    <Routes>
        <Route path="/" element={<UserRegistration/>} />
    </Routes>
  )
}

export default NavBar