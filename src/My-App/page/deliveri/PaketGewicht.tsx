import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import {
  wrapperStyle,
  labelStyle,
  inputStyle
} from './DeliverStyle'
interface PaketGevichtProps {
  gewich: string
  setWeight: React.Dispatch<React.SetStateAction<string>>
}
const PaketGewicht: React.FC<PaketGevichtProps> = ({ gewich, setWeight }) => {
  return (
    <Box sx={wrapperStyle}>
      <Typography sx={labelStyle} variant="subtitle1">
        ამანათის წონა
      </Typography>
      <TextField
        type="number"
        value={gewich}
        onChange={(e) => setWeight(e.target.value)}
        variant="outlined"
        size="small"
        sx={inputStyle}
      />
    </Box>
  )
}
export default PaketGewicht