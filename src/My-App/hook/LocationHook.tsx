import { useState } from "react"
import type { LocationType } from "../interface/interface"
import axios from "axios";
import { Location_App_Key, Location_URL } from "../Appy_Key/Appy_Key";


interface LocationHookType {
    location: LocationType
    loading: boolean
    getLocation: () => void
}

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
}

export const useLocation = ():LocationHookType  => {

    const [location, setLocation] = useState<LocationType>({
        country: "",
        city: "",
        street: "",
        postIndex: ""
    })
 
    const [loading, setLoading] = useState(false)

    const getLocation = () => {

        setLoading(true)

        navigator.geolocation.getCurrentPosition(

            async (position) => {

                const {latitude, longitude} = position.coords

                try {
                    const response = await axios.get(`${Location_URL}${latitude},${longitude}&key=${Location_App_Key}`)
                    const data = response.data

                    if(data.status === "OK") {
                        const adres: AddressComponent[] = data?.results[0]?.address_components || []
                        console.log("address components:", adres)

                        const responsType = (type: string) => {
                            const component = adres.find(comp => 
                                comp.types.includes(type))
                                return component?.long_name || ""
                        }

                        const country = responsType("country")
                        const street = responsType("route") || responsType("sublocality") 
                                                            || responsType("neighborhood") 
                                                            || responsType("administrative_area_level_1")
                        const city = responsType("locality")
                        const postIndex = responsType("postal_code")

                        setLocation({country, street, city, postIndex})
                    } else {
                        setLocation({
                            country: "",
                            city: "",
                            street: "მისამათი ვერ მოიძება",
                            postIndex: ""
                        })
                    }

                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            },


            (error) => {
                setLoading(false) 
                console.log(error)
                setLocation({
                    country: "მდებარეობაზე წვდომა არ იქნა დაშვებული",
                    city: "",
                    street: "",
                    postIndex: ""
                })
            }

        )
        
    }

    return {loading, location, getLocation} 

    
}