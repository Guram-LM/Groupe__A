import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'


interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CourierVehicle:React.FC<Props> = ({value, onChange}) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>ტრანსპორტი</InputLabel>
      <Select
        value={value}
        label="ტრანსპორტი"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="ველოსიპედი">ველოსიპედი</MenuItem>
        <MenuItem value="მოპედი">მოპედი</MenuItem>
        <MenuItem value="ავტომობილი">ავტომობილი</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CourierVehicle