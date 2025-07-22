import { Link } from "react-router-dom"
import type { CourierResponseType } from "./CourierInterface"

const CouriersProfile = () => {
    const getProfile = localStorage.getItem("geste")
    const gestProfile:CourierResponseType | null = getProfile ? JSON.parse(getProfile) : null
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
          <p>{gestProfile.vehicle}</p>
           <p>{gestProfile.phoneNumber}</p>
          <p>{gestProfile.email}</p>

        </div>

        <div>
            {gestProfile.workingDays.map((tag, index) =>
            <div key={index}>
                <p>{tag.tag}</p>
                {tag.startHour}:{tag.startMinute} - {tag.endHour}:{tag.endMinute}
            </div>
                
            )}
        </div>

      </div>

      <div>
        <Link to={"/courier/couriersList"}>კურიერები და მათი სამუშაო განრიგებიი</Link>
      </div>


    </div>
  )
}

export default CouriersProfile