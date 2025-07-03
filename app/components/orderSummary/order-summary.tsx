import OrderLists from './order-lists'
import OrderCheckout from './order-checkout'
export default function OrderSummary() {
  return (
    <>
      <h1>Order Summary</h1>
      <OrderLists />
      <OrderCheckout />
    </>
  )
}
