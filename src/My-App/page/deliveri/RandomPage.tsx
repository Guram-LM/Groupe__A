import React from 'react'
import { Typography, Box } from '@mui/material'
import { delcontainerStyle , timeTextStyle, priceTextStyle } from './DeliverStyle'
interface RandomPageProps {
  randomTime: number | null
  randomPreis: number | null
}
const RandomPage: React.FC<RandomPageProps> = ({ randomPreis, randomTime }) => {
  if (!randomTime || !randomPreis) return null
  return (
    <Box sx={delcontainerStyle}>
      <Typography sx={timeTextStyle}>
        მიწოდების სავარაუდო დრო: {randomTime} წუთი
      </Typography>
      <Typography sx={priceTextStyle}>
        მომსახურების ღირებულება: {randomPreis} ლარი
      </Typography>
    </Box>
  )
}
export default RandomPage