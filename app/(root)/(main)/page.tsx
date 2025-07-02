import CategoryList from "@/app/components/category-list";
import ProductList from "@/app/components/product-list";
import ProductSearch from "@/app/components/product-search";

export default function Home() {
  return (
    <div className="flex justify-center items-start max-w-[1280px] mx-auto">
      <div className="w-2/3 h-full p-5">
        <div className="space-y-5">
          <ProductSearch/>
          <CategoryList/>
        </div>
        <div>
          <ProductList/>
        </div>
      </div>
      <div className="w-1/3 h-full bg-green-300">
        Oder Summary & Checkout
      </div>
    </div>
  );
}