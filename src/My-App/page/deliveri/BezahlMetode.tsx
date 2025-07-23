import React from 'react'

interface BezahlProps {
    bezahlMetode: string
    setBezahlMetode: React.Dispatch<React.SetStateAction<string>>
    sendData: () => void
}

const BezahlMetode:React.FC<BezahlProps> = ({bezahlMetode, setBezahlMetode, sendData}) => {
    
    

  return (
    <div>
        <h4>აირჩიე გადახდის მეთოდი:</h4>
        <label>
          <input
            type="radio"
            name="payment"
            value="ბარათი"
            checked={bezahlMetode === "ბარათი"}
            onChange={(e) => setBezahlMetode(e.target.value)}
          />
          ბარათით გადახდა
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="ნაღდი"
            checked={bezahlMetode === "ნაღდი"}
            onChange={(e) => setBezahlMetode(e.target.value)}
          />
          ნაღდი ანგარიშსწორება
        </label>
      

      <button style={{ marginTop: "1rem" }} onClick={sendData}>
        შეკვეთის დადასტურება
      </button>
    </div>
  )
}

export default BezahlMetode