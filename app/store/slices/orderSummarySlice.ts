import { createSlice } from '@reduxjs/toolkit'

export interface OrderSummaryState {
  orders: {
    id: string
    photo: string
    name: string
    price: string
    quantity: number
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
      const order = state.orders.find((o) => o.id === action.payload.id)
      if (state.orders.length !== 0 && order) {
        order.quantity++
      } else {
        state.orders.unshift({ ...action.payload, quantity: 1 })
      }
      // Ensure quantity starts at 1
    },

    removeOrder: (state, action) => {
      // const order = state.orders.find((o) => o.title === action.payload.title)

      state.orders = state.orders.filter((o) => o.id !== action.payload.id)
    },

    increaseQuantity: (state, action) => {
      const order = state.orders.find((o) => o.id === action.payload.id)
      if (order) {
        order.quantity++
      }
    },
    decreaseQuantity: (state, action) => {
      const order = state.orders.find((o) => o.id === action.payload.id)
      if (order) {
        order.quantity--
      }
    },
  },
})

export const { addOrder, removeOrder, increaseQuantity, decreaseQuantity } =
  orderSummarySlice.actions

export default orderSummarySlice.reducer
