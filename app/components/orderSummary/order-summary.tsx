import OrderLists from './order-lists'
import OrderCheckout from './order-checkout'
export default function OrderSummary() {
  return (
    <>
      <div className="px-5 flex flex-col h-full ">
        <h1 className="ms-2 mb-4 text-[20px] font-semibold">Order Summary</h1>
        <OrderLists />
      </div>
      <OrderCheckout />
    </>
  )
}
