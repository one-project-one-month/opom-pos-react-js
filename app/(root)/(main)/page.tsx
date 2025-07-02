import CategoryList from "@/app/components/category-list";
import ProductList from "@/app/components/product-list";
import ProductSearch from "@/app/components/product-search";

export default function Home() {
  return (
    <div className="flex justify-center items-start max-w-[1280px] mx-auto min-h-screen h-screen">
      <div className="w-2/3 h-screen p-5 flex flex-col border-r border-[#9E9E9ECC]">
        <div className="space-y-5">
          <ProductSearch/>
          <CategoryList/>
        </div>
        <div className="flex-1 min-h-0 mt-5">
          <ProductList/>
        </div>
      </div>
      <div className="w-1/3 h-screen">
        Oder Summary & Checkout
      </div>
    </div>
  );
}