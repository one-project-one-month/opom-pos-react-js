import CategoryList from '@/app/components/category-list'
import ProductList from '@/app/components/product-list'
import ProductSearch from '@/app/components/product-search'
import OrderSummary from '@/app/components/orderSummary/order-summary'
import OrderSummaryLayout from '@/app/components/orderSummary/order-summary-layout'

export default function Home() {
  return (
    //justify-center remove
    <div className="flex  items-start max-w-full  min-h-screen h-screen ">
      <div className="lg:w-2/3 md:w-2/3 w-[80%] h-screen p-5 flex flex-col border-r border-[#9E9E9ECC]">
        <div className="space-y-5">
          <ProductSearch />
          <CategoryList />
        </div>
        <div className="flex-1 min-h-0 mt-5">
          <ProductList />
        </div>
      </div>
      <OrderSummaryLayout />
    </div>
  )
}
