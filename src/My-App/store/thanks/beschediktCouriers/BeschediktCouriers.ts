import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CourierResponseType } from "../../../page/corurier/CourierInterface";

interface CourierState {
  couriers: CourierResponseType[]
}

const initialState: CourierState = {
  couriers: [],
}

const couriersSlice = createSlice({
  name: 'couriers',
  initialState,
  reducers: {
    setCouriers(state, action: PayloadAction<CourierResponseType[]>) {
      state.couriers = action.payload
    },
    updateCourierStatus(state, action: PayloadAction<{id: string; Beschäftigtyeit: string | null}>) {
      const courier = state.couriers.find(c => c.id === action.payload.id)
      if (courier) {
        courier.Beschäftigtyeit = action.payload.Beschäftigtyeit
      }
    }
  }
})

export const { setCouriers, updateCourierStatus } = couriersSlice.actions
export default couriersSlice.reducer
