import React, { type FormEvent, type ReactNode } from 'react'
import type { InputeType, UserType } from '../interface/interface'
import { TextField } from '@mui/material'

interface FormPropsType<T> {
    inpute: InputeType[]
    FormButton: ReactNode
    onSubmit: (e:FormEvent<HTMLFormElement>) => void
     value: T
  onChange: React.Dispatch<React.SetStateAction<T>>
}

const FormPage:React.FC <FormPropsType<T>> = ({inpute, FormButton, onSubmit, value, onChange}) => {
  return (
    
    <form onSubmit={onSubmit}>
        {inpute.map((item, index) => {
          if(item.type === "custom") {
            return <div key={index}>{item.component} </div>
          } return (
            <TextField
            key={item.name}
            type={item.type}
            name={item.name}
            label={item.label}
            fullWidth
            margin='normal'
            value={value[item.name]}
            onChange={(e) => onChange((prev) => ({
              ...prev,
              [item.name]: e.target.value
            }))}
            />
          )
        })}
        {FormButton}
    </form>
  )
}

export default FormPage