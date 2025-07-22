import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import {
  wrapperStyle,
  labelStyle,
  inputStyle
} from './DeliverStyle'
interface DeliverAdreseProp {
  paketabholung: string
  setPaketabholung: React.Dispatch<React.SetStateAction<string>>
  zustelladresse: string
  setzustelladresse: React.Dispatch<React.SetStateAction<string>>
}
const DeliverAdrese: React.FC<DeliverAdreseProp> = ({paketabholung, setPaketabholung, zustelladresse, setzustelladresse }) => {
  return (
    <Box sx={wrapperStyle}>
      <Box>
        <Typography component="label" htmlFor="A_Adres" sx={labelStyle} variant="subtitle1">
          ამანათის აღების მისამართი
        </Typography>
        <TextField
          id="A_Adres"
          type="text"
          value={paketabholung}
          onChange={(e) => setPaketabholung(e.target.value)}
          variant="outlined"
          size="small"
          sx={inputStyle}
        />
      </Box>
      <Box>
        <Typography component="label" htmlFor="B_Adres" sx={labelStyle} variant="subtitle1">
          ამანათის მიტანის მისამართი
        </Typography>
        <TextField
          id="B_Adres"
          type="text"
          value={zustelladresse}
          onChange={(e) => setzustelladresse(e.target.value)}
          variant="outlined"
          size="small"
          sx={inputStyle}
        />
      </Box>
    </Box>
  )
}
export default DeliverAdrese