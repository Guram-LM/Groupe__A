import { useGetAdminQuery } from "../../store/RT_query/query"

const AdminList = () => {
    const {data} = useGetAdminQuery()
  return (
    <div>
        {
            data?.map(admin => 
                <div key={admin.id}>
                    <div>
                        <img src={admin.profileImage} alt="" />
                    </div>

                    <div>
                        <p>{admin.firstName} </p>
                        <p>{admin.lastName} </p>
                        <p>{admin.pid} </p>
                        <p>{admin.email} </p>
                        <p>{admin.phoneNumber} </p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default AdminList