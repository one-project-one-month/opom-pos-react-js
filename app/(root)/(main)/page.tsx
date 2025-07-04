import CategoryList from '@/app/components/category-list'
import ProductList from '@/app/components/product-list'
import ProductSearch from '@/app/components/product-search'
import OrderSummary from '@/app/components/orderSummary/order-summary'

export default function Home() {
  return (
    <div className="flex justify-center items-start max-w-full  min-h-screen h-screen ">
      <div className="flex-4 h-screen p-5 flex flex-col border-r border-[#9E9E9ECC]">
        <div className="space-y-5">
          <ProductSearch />
          <CategoryList />
        </div>
        <div className="flex-1 min-h-0 mt-5">
          <ProductList />
        </div>
      </div>
      <div className="flex-2 h-[calc(100vh-79px)] overflow-hidden py-5 flex flex-col">
        <OrderSummary />
      </div>
    </div>
  )
}
