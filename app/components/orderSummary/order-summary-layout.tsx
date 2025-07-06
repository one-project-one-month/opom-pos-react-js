import OrderSummary from './order-summary'
export default function OrderSummaryLayout() {
  return (
    <>
      <div className="lg:hidden  p-5">
        <p>Icon</p>
      </div>
      {/* add some class */}
      <div className="fixed  lg:relative right-[-400px]  lg:right-0 bg-white w-1/3 h-screen overflow-hidden pt-5 flex flex-col">
        <OrderSummary />
      </div>
    </>
  )
}
