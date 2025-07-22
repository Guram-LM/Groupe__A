import type { AdminResponseType } from './AdminInterface'

const AdminProfile = () => {
    const getPorofile = localStorage.getItem("geste")
    const gestProfile: AdminResponseType | null = getPorofile ? JSON.parse(getPorofile) : null
    if(!gestProfile) return <h1>მომხმარებლის პროფილი არ მოიძებნა</h1>
  return (
   
      <div>
        <div>
          <img src={gestProfile.profileImage} alt="" />
        </div>

        <div>
          <p>{gestProfile.firstName}</p>
          <p>{gestProfile.lastName}</p>
          <p>{gestProfile.pid}</p>
          <p>{gestProfile.phoneNumber}</p>
          <p>{gestProfile.email}</p>

        </div>

        </div>


  )
}

export default AdminProfile