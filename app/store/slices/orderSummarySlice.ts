import { createSlice } from '@reduxjs/toolkit'

export interface OrderSummaryState {
  orders: {
    // id: string
    image: string
    title: string
    price: string
  }[]
}

const initialState: OrderSummaryState = {
  orders: [],
}

export const orderSummarySlice = createSlice({
  name: 'orderSummary',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload)
    },
    removeOrder: (state) => {},
  },
})

export const { addOrder, removeOrder } = orderSummarySlice.actions
export default orderSummarySlice.reducer
