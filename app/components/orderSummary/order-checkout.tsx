'use client'
import { useSelector } from 'react-redux'
export default function OrderCheckout() {
  const orders = useSelector((state: any) => state.orderSummary.orders)

  const totalAmount = orders.reduce((total: number, order: any) => {
    return total + parseFloat(order.price) * order.quantity
  }, 0)
  return (
    <div className="flex flex-col justify-end px-6 bg-[#f1f1f1] pt-8 pb-5 pe-15">
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
      <button
        disabled={orders.length === 0}
        className={`text-white font-bold text-[18px] w-full rounded-[15px] py-[10px] mb-2 ${
          orders.length === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#FB9E3A] hover:bg-orange-400'
        }`}>
        Checkout
      </button>
    </div>
  )
}
