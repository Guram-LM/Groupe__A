import { Link } from "react-router-dom"
import type { UserResponseType } from "./UserInterface"

const UserProfile = () => {
  const getProfile = localStorage.getItem("geste")
  const gestProfile: UserResponseType | null  = getProfile ? JSON.parse(getProfile) : null


  if(!gestProfile) return <h1>მომხმარებლის პროფილი არ მოიძებნა</h1>
  return (
    <div>
      <div>
        <div>
          <img src={gestProfile.profileImage} alt="" />
        </div>

        <div>
          <p>{gestProfile.firstName}</p>
          <p>{gestProfile.lastName}</p>
          <p>{gestProfile.pid}</p>
          <p>{gestProfile.country}</p>
          <p>{gestProfile.city}</p>
          <p>{gestProfile.street}</p>
           <p>{gestProfile.phoneNumber}</p>
          <p>{gestProfile.email}</p>

        </div>

      </div>

      <div>
        <Link to={"/user/deliverRequest"}> ჩვენი სერვისით სარგებლობა </Link>
      </div>


    </div>
  )
}

export default UserProfile