import React, { useState } from 'react'
import { useGetCouriersQuery } from '../../store/RT_query/query'
import type { CourierResponseType } from '../corurier/CourierInterface'
import PaketGewicht from './PaketGewicht'
import DeliverAdrese from './DeliverAdrese'
import { toast } from 'react-toastify'
import CouriersPage from './CouriersPage'
import RandomPage from './RandomPage'
import { Box, Button } from '@mui/material'

import {
  delreqestcontainerStyle,
  buttonStyle,
  sectionStyle,
} from './DeliverStyle'
import type { UserResponseType } from '../user/UserInterface'


export interface BeschtelunType {
  kunde: UserResponseType
  gewicht: string
  abholAdresse: string
  zustellAdresse: string
  voraussichtlicheLieferzeit: number | null
  preis: number | null
}


const DeliverRequest = () => {
  const { data } = useGetCouriersQuery()
  const couriersData: CourierResponseType[] = data ?? []
  const [gewich, setWeight] = useState('')
  const [couriers, setCouriers] = useState<CourierResponseType[]>([])
  const [paketabholung, setPaketabholung] = useState('')
  const [zustelladresse, setzustelladresse] = useState('')
  const [randomTime, setRandomTime] = useState<number | null>(null)
  const [randomPreis, setRandomPrais] = useState<number | null>(null)
  const [hidenButton, sethidenButton] = useState(false)
  const validate = () => {
    if (!paketabholung || !zustelladresse) {
      toast.error('მისამართი სავალდებულოა')
      return false
    }
    if (paketabholung.length < 5 || zustelladresse.length < 5) {
      toast.error('მისამართი უნდა შეიცავდეს მინიმუმ 5 სიმბოლოს')
      return false
    }
    if (!/\d/.test(paketabholung) || !/\d/.test(zustelladresse)) {
      toast.error('მისამართი უნდა შეიცავდეს მინიმუმ ერთ ციფრს')
      return false
    }
    if (!/\d/.test(gewich)) {
      toast.error('წონა უნდა შეიცავდეს მინიმუმ ერთ ციფრს')
      return false
    }
    return true
  }
  console.log("courier:", couriersData);
  const deliverGewicht = () => {
    const gewichtNum = Number(gewich)
    if (gewichtNum <= 2) {
      setCouriers(couriersData)
    } else if (gewichtNum <= 10) {
      setCouriers(
        couriersData?.filter(
          (courier) => courier.vehicle === 'მოპედი' || courier.vehicle === 'ავტომობილი'
        )
      )
    } else {
      setCouriers(couriersData?.filter((courier) => courier.vehicle === 'ავტომობილი'))
    }
  }
  const generate = () => {
    const time = Math.floor(Math.random() * (30 - 5 + 1)) + 5
    const preis = Math.floor(Math.random() * (50 - 5 + 1)) + 5
    setRandomTime(time)
    setRandomPrais(preis)
  }
  const onClick = () => {
    if (!validate()) return
    generate()
    deliverGewicht()
    sethidenButton(true) 
  }

  const getData = localStorage.getItem("geste")
  const kunde = getData ? JSON.parse(getData) : null

  const beschtelungData:BeschtelunType = {
    kunde,
    gewicht: gewich,
    abholAdresse: paketabholung,
    zustellAdresse: zustelladresse,
    voraussichtlicheLieferzeit: randomTime,
    preis: randomPreis
  }
  


  return (
    <Box sx={delreqestcontainerStyle}>
      <Box sx={sectionStyle}>
        <PaketGewicht gewich={gewich} setWeight={setWeight} />
      </Box>
      <Box sx={sectionStyle}>
        <DeliverAdrese
          paketabholung={paketabholung}
          setPaketabholung={setPaketabholung}
          setzustelladresse={setzustelladresse}
          zustelladresse={zustelladresse}
        />
      </Box>
      <Box sx={sectionStyle}>
        <RandomPage randomPreis={randomPreis} randomTime={randomTime} />
      </Box>

        {hidenButton ? (
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'green' }}>
          აირჩიე კურიერი
        </p>
         ) : (<Button onClick={onClick} sx={buttonStyle}>
            
            შეკვეთა
          </Button>)}
      
      <Box sx={sectionStyle}>
        <CouriersPage couriers={couriers} beschtelungData={beschtelungData}/>
      </Box>
    </Box>
  )
}
export default DeliverRequest