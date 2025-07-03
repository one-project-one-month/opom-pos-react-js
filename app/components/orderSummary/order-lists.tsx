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
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ padding: '8px', textAlign: 'left' }}>Item</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Qty</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Price</th>
          <th style={{ padding: '8px', textAlign: 'left' }}></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order: any, i: number) => (
          <tr key={i}>
            <td style={{ padding: '8px' }}>{order.title}</td>
            <td
              style={{ padding: '8px', display: 'flex', alignItems: 'center' }}>
              {order.quantity}{' '}
              <span
                className="cursor-pointer"
                style={{ marginLeft: '8px' }}
                onClick={() =>
                  dispatch(increaseQuantity({ title: order.title }))
                }>
                <PlusCircle />
              </span>
            </td>
            <td style={{ padding: '8px' }}>{order.price}</td>
            <td style={{ padding: '8px' }}>
              <button
                onClick={() => dispatch(removeOrder({ title: order.title }))}>
                <Trash2 />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
