'use client'
import { useSelector, useDispatch } from 'react-redux'
import { Trash2, PlusCircle, CircleMinus, MinusCircle } from 'lucide-react'

import {
  increaseQuantity,
  removeOrder,
  decreaseQuantity,
} from '@/app/store/slices/orderSummarySlice'

export default function OrderLists() {
  const orders = useSelector((state: any) => state.orderSummary.orders)
  const dispatch = useDispatch()

  if (orders.length === 0) {
    return <p className="font-bold ms-1">No Orders</p>
  }

  return (
    <div className="h-[300px] flex flex-col min-h-0 overflow-hidden">
      {/* Fixed Header */}
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="text-left p-1">Items</th>
            <th className="text-center p-1">Qty</th>
            <th className="text-center p-1">Price</th>
            <th className="text-left p-1"></th>
          </tr>
        </thead>
      </table>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <table className="w-full table-fixed">
          <tbody>
            {orders.map((order: any, i: number) => (
              <tr key={i}>
                <td className="p-2 text-left">{order.title}</td>
                <td className="p-2 text-left">
                  <div className="flex items-center justify-center">
                    <button
                      className={`cursor-pointer ${
                        order.quantity > 1 ? 'block' : 'invisible'
                      }`}
                      onClick={() =>
                        dispatch(decreaseQuantity({ title: order.title }))
                      }>
                      <MinusCircle
                        fill="#fb9e3a"
                        color="white"
                        strokeWidth={2}
                      />
                    </button>

                    <span className="mx-2"> {order.quantity}</span>
                    <button
                      className="cursor-pointer "
                      onClick={() =>
                        dispatch(increaseQuantity({ title: order.title }))
                      }>
                      <PlusCircle
                        fill="#fb9e3a"
                        color="white"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </td>
                <td className="p-2 text-center">{parseFloat(order.price)}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() =>
                      dispatch(removeOrder({ title: order.title }))
                    }>
                    <Trash2 className="cursor-pointer" size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
