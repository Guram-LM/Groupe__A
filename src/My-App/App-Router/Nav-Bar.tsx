import { Route, Routes } from "react-router-dom"
import UserRegistration from "../page/UserRegistration"
import Lokation from "../page/Lokation"


const NavBar = () => {
  return (
    <Routes>
        <Route path="/" element={<UserRegistration/>} />
        <Route path="/lokation" element={<Lokation/>} />
    </Routes>
  )
}

export default NavBar