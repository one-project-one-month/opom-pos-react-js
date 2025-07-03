import { createSlice } from '@reduxjs/toolkit'

export interface OrderSummaryState {
  orders: {
    // id: string
    image: string
    title: string
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
      state.orders.push({ ...action.payload, quantity: 1 }) // Ensure quantity starts at 1
    },

    removeOrder: (state, action) => {
      const order = state.orders.find((o) => o.title === action.payload.title)
      //remove qty first if it is more than 1
      if (order && order.quantity > 1) {
        order.quantity -= 1
      } else {
        console.log('it works')
        state.orders = state.orders.filter(
          (o) => o.title !== action.payload.title
        )
        console.log(state.orders)
      }
    },

    increaseQuantity: (state, action) => {
      const order = state.orders.find((o) => o.title === action.payload.title)
      if (order) {
        order.quantity += 1
      }
    },
  },
})

export const { addOrder, removeOrder, increaseQuantity } = orderSummarySlice.actions

export default orderSummarySlice.reducer
