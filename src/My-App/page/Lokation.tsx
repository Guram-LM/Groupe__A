import { TextField } from "@mui/material";
import { useLocation } from "../hook/LocationHook";
import type { LocationInputeType, UseLocation } from "../interface/interface";
import { useEffect, useMemo, useState,  } from "react";


interface LokationProps {
  value: UseLocation
  onChange: (value: UseLocation) => void
}

const Lokation:React.FC<LokationProps> = ({value, onChange}) => {

  const {loading, location, getLocation} = useLocation()

  useEffect(() => {
    if(location) {
      onChange({
        city: `${location.city} ${location.postIndex}`,
        country: location.country,
        street: location.street

      })
    }
  }, [location])

  const adresinpute:LocationInputeType[] = [
          {type: "text", name: "country", label: "country" },
          {type: "text", name: "city", label: "city" },
          {type: "text", name: "street", label: "street" },   
    ]

    const lokationButton = useMemo(() => {
      return <button onClick={getLocation} disabled={loading}>
        {loading ? "იტვირთება..." : "მდებარეობის მიღება"}
      </button>
    }, [loading])


  
  return (
    <div>
        {adresinpute.map(({type, label, name}) => 
        <TextField key={name} type={type} name={name} label={label}
                   fullWidth margin='normal'
                   value={value[name]}
                   onChange={(e) => onChange({
                    ...value,
                    [name]: e.target.value 
                   })}
                   
        />
        )}
        {lokationButton}
    </div>
  );
};
export default Lokation;