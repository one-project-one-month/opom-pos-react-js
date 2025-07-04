'use client'
import { useSelector } from 'react-redux'
export default function OrderCheckout() {
  const orders = useSelector((state: any) => state.orderSummary.orders)

  const totalAmount = orders.reduce((total: number, order: any) => {
    return total + parseFloat(order.price) * order.quantity
  }, 0)
  return (
    <div className="px-6 bg-[#f1f1f1] py-8 pe-15">
      <ul>
        <li className="w-full flex justify-between">
          <p>Sub Total</p>
          <p>{totalAmount}MMK</p>
        </li>
        <li className="w-full flex justify-between pt-6">
          <p>Discount</p>
        </li>
        <li className="w-full flex justify-between py-7">
          <p className="font-bold">Total Amount</p>
          <span className="font-bold">{totalAmount}MMK</span>
        </li>
      </ul>
      <button className="text-white font-bold text-[18px] bg-[#FB9E3A] w-full rounded-[15px] py-[10px]">
        Checkout
      </button>
    </div>
  )
}
