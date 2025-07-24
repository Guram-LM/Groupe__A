import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'

interface BezahlProps {
  bezahlMetode: string
  setBezahlMetode: React.Dispatch<React.SetStateAction<string>>
  sendData: () => void
}

const BezahlMetode: React.FC<BezahlProps> = ({ bezahlMetode, setBezahlMetode, sendData }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        bgcolor: '#1e3a8a',
        p: 4,
        borderRadius: 4,
        boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 250 
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>
          აირჩიე გადახდის მეთოდი:
        </Typography>

        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            name="payment"
            value={bezahlMetode}
            onChange={(e) => setBezahlMetode(e.target.value)}
          >
            <FormControlLabel
              value="ბარათი"
              control={
                <Radio sx={{ color: '#FFD700', '&.Mui-checked': { color: '#FFD700' } }} />
              }
              label={<Typography sx={{ color: '#FFD700' }}>ბარათით გადახდა</Typography>}
            />
            <FormControlLabel
              value="ნაღდი"
              control={
                <Radio sx={{ color: '#FFD700', '&.Mui-checked': { color: '#FFD700' } }} />
              }
              label={<Typography sx={{ color: '#FFD700' }}>ნაღდი ანგარიშსწორება</Typography>}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          onClick={sendData}
          sx={{
            bgcolor: '#3b82f6',
            color: '#FFD700',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: 3,
            '&:hover': {
              bgcolor: '#2563eb'
            }
          }}
        >
          შეკვეთის დადასტურება
        </Button>
      </Box>
    </Box>
  )
}

export default BezahlMetode
