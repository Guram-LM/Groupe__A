import { useState } from "react";
import { Location_App_Key } from "../../Appy_Key/Appy_Key";


const Lokation = () => {

  const [adres, setAdres] = useState("");
  const [loading, setLoading] = useState(false);

  const getLokation = () => {

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const locationURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${Location_App_Key}`;
        try {
          const response = await fetch(locationURL);
          const data = await response.json();
          if (data.status === "OK") {
            const formattedAddress = data.results[0]?.formatted_address || "მისამართი ვერ მოიძებნა";
            setAdres(formattedAddress);
          } 

        } catch (error) {
          console.error( error);
          setAdres("დაფიქსირდა შეცდომა");
        } finally {
          setLoading(false);
        }
      },
      
      (error) => {
        console.error(error);
        setAdres("მდებარეობის წვდომა არ იქნა დაშვებული");
        setLoading(false);
      }
    );
  };
  return (
    <div>
      <button onClick={getLokation} disabled={loading}>
        {loading ? "იტვირთება..." : "მდებარეობის მიღება"}
      </button>
      {adres && <p>მისამართი: {adres}</p>}
    </div>
  );
};
export default Lokation;