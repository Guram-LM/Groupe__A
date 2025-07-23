import { useGetBeschtelenQuery } from "../../store/RT_query/query"

const Shaduli = () => {
    const {data} = useGetBeschtelenQuery()


  return (
    <div>
        {
            data?.map(item => 
                <div key={item.id}>
                    <div>
                        <h2>კლიენტი</h2>
                        <img src={item.kunde.profileImage} alt="profileImage" />
                        <p>{item.kunde.firstName} </p>
                        <p>{item.kunde.lastName} </p>
                        <p>{item.kunde.country} </p>
                        <p>{item.kunde.city} </p>
                        <p>{item.kunde.street} </p>
                        <p>{item.kunde.phoneNumber} </p>
                        <p>{item.kunde.email} </p>
                    </div>

                    <div>
                        <h2>კურიერი</h2>
                        <img src={item.courier.profileImage} alt="profileImage" />
                        <p>{item.courier.firstName} </p>
                        <p>{item.courier.lastName} </p>
                        <p>{item.courier.pid} </p>
                        <p>{item.courier.phoneNumber} </p>
                        <p>{item.courier.email} </p>
                        <p>{item.courier.Beschäftigtyeit} </p>

                    </div>

                    <div>
                        <h2>შეკვეთის დეტალები</h2>
                        <p>{item.abholAdresse} </p>
                        <p>{item.zustellAdresse} </p>
                        <p>{item.bezhalen} </p>
                        <p>{item.gewicht} </p>
                        <p>{item.preis} </p>
                        <p>{item.voraussichtlicheLieferzeit} </p>

                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Shaduli