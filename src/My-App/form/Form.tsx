import React, { type FormEvent, type ReactNode } from 'react'
import { TextField } from '@mui/material'
import type { InputeType } from './FormInterface'

interface FormPropsType<T> {
  inpute: InputeType<T>[];
  FormButton: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  value: T;
  onChange: React.Dispatch<React.SetStateAction<T>>;
}

const FormPage  = <T,>({inpute, FormButton, onSubmit, value, onChange}: FormPropsType<T>) => {
  return (
    
    <form onSubmit={onSubmit}>
        {inpute.map((item, index) => {
          if(item.type === "custom") {
            return <div key={index}>{item.component} </div>
          } return (
            <TextField
            key={String(item.name)}
            type={item.type}
            name={String(item.name)}
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