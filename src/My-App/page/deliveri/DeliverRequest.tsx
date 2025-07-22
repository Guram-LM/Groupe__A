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


const DeliverRequest = () => {
  const { data } = useGetCouriersQuery()
  const couriersData: CourierResponseType[] = data ?? []
  const [gewich, setWeight] = useState('')
  const [couriers, setCouriers] = useState<CourierResponseType[]>([])
  const [paketabholung, setPaketabholung] = useState('')
  const [zustelladresse, setzustelladresse] = useState('')
  const [randomTime, setRandomTime] = useState<number | null>(null)
  const [randomPreis, setRandomPrais] = useState<number | null>(null)
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
    toast.success('შეკვეთა წარმატებით გავიდა')
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
      <Button onClick={onClick} sx={buttonStyle}>
        შეკვეთა
      </Button>
      <Box sx={sectionStyle}>
        <CouriersPage couriers={couriers} />
      </Box>
    </Box>
  )
}
export default DeliverRequest