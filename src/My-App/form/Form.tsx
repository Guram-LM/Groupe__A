import React, { type ReactNode } from 'react'
import type { InputeType } from '../interface/interface'
import { TextField } from '@mui/material'

interface FormPropsType {
    inpute: InputeType[]
    FormButton: ReactNode
}

const FormPage:React.FC <FormPropsType> = ({inpute, FormButton}) => {
  return (
    
    <form >
        {inpute.map(inp => 
            <TextField key={inp.name} type={inp.type} name={inp.name} label={inp.label}
                fullWidth margin='normal'
            />
        )}
        {FormButton}
    </form>
  )
}

export default FormPage