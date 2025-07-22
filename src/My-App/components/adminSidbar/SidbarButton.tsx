import { Link } from "react-router-dom"
import LogautButton from "./LogautButton"

interface SidbarButtonType {
    url: string
    mane: string
}
const SidbarButton = () => {
    const sitbarButt:SidbarButtonType[] = [
        {url:"/admin/adminProfile", mane: "Profile"},
        {url:"/admin/adminList", mane: "admins"},
        {url:"/admin/userList", mane: "Customer"},
        {url:"/admin/couriersList", mane: "ouriers"},
        {url:"/admin/userRegistration", mane: "Add Customer"},
        {url:"/admin/courierRegistration", mane: "Add Couriers"},
        {url:"/admin/courierRegistration", mane: "Cange Schedule "},
       
    ]
  return (
    <div>
        {
           sitbarButt.map(butt => 
            <Link key={butt.url} to={butt.url}>{butt.mane} </Link>
           ) 
        }
        <LogautButton/>
    </div>
  )
}

export default SidbarButton