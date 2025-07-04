'use client'
import { useSelector, useDispatch } from 'react-redux'
import { Trash2, PlusCircle } from 'lucide-react'
import {
  increaseQuantity,
  removeOrder,
} from '@/app/store/slices/orderSummarySlice'

export default function OrderLists() {
  const orders = useSelector((state: any) => state.orderSummary.orders)
  const dispatch = useDispatch()

  return (
    <div className="h-[300px] flex flex-col min-h-0 overflow-hidden">
      {/* Fixed Header */}
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="text-left p-1">Items</th>
            <th className="text-left p-1">Qty</th>
            <th className="text-left p-1">Price</th>
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
                  <div className="flex items-center">
                    {order.quantity}
                    <span
                      className="cursor-pointer ms-1"
                      onClick={() =>
                        dispatch(increaseQuantity({ title: order.title }))
                      }>
                      <PlusCircle />
                    </span>
                  </div>
                </td>
                <td className="p-2 text-left">{order.price}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() =>
                      dispatch(removeOrder({ title: order.title }))
                    }>
                    <Trash2 />
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
