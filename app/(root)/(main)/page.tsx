import CategoryList from "@/app/components/category-list";
import ProductList from "@/app/components/product-list";
import ProductSearch from "@/app/components/product-search";

export default function Home() {
  return (
    <div className="md:flex justify-center items-center max-w-[1280px] mx-auto">
      <div className="max-w-[848px] md:w-[848px] h-full p-5">
        <div className="flex justify-start items-center h-[48px]">
          <CategoryList/>
          <ProductSearch/>
        </div>
        <div>
          <ProductList/>
        </div>
      </div>
      <div className="max-w-[432px] md:w-[432px] h-full bg-green-300">
        Oder Summary & Checkout
      </div>
    </div>
  );
}