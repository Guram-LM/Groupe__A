import type { ReactNode } from "react"

export interface BaseInputType<T> {
  type: "text" | "number" | "email" | "password";
  label: string;
  name: keyof T;
}

export interface CustomInputType {
  type: "custom";
  component: ReactNode;
}


export type InputeType<T> = BaseInputType<T> | CustomInputType;