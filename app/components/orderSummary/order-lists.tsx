'use client'
import { useSelector } from 'react-redux'
export default function OrderLists() {
  const orders = useSelector((state: any) => state.orderSummary.orders)
  console.log('Orders in OrderSummary:', orders)
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
            <td style={{ padding: '8px' }}>1</td>
            <td style={{ padding: '8px' }}>{order.price}</td>
            <td style={{ padding: '8px' }}>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
