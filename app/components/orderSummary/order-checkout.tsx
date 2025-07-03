'use client'
import { useSelector } from 'react-redux'
export default function OrderCheckout() {
  const orders = useSelector((state: any) => state.orderSummary.orders)
  const totalAmount = orders.reduce((total: number, order: any) => {
    return total + parseFloat(order.price) * order.quantity
  }, 0)
  return (
    <div>
      <ul>
        <li className="w-full flex justify-between">
          <p>Sub Total</p>
          <p>{totalAmount}MMK</p>
        </li>
        <li className="w-full flex justify-between">
          <p>Discount</p>
        </li>
        <li className="w-full flex justify-between">
          <p>Total Amount</p>
          {totalAmount}MMK
        </li>
      </ul>
    </div>
  )
}
