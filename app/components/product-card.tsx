import Image from 'next/image'

type ProductCardProps = {
  photo: string
  name: string
  price: string | number
  ordersClick?: () => void
}

export const ProductCard = ({
  photo,
  name,
  price,
  ordersClick,
}: ProductCardProps) => {
  return (
    <div
      className="w-full h-full bg-[#F6F6F6] rounded-[12px] flex justify-center items-center shadow-sm cursor-pointer hover:transform hover:scale-[1.02] transition-all duration-200 ease-in-out"
      onClick={ordersClick}>
      <div className="w-[110px]">
        <div className="space-y-[15px]">
          <div className="w-[110px] h-[110px] relative overflow-hidden flex items-center justify-center">
            <Image
              src={photo || '/logo.svg'}
              width={110}
              height={110}
              alt="Product Image"
              className="object-contain"
            />
          </div>
          <div className="space-y-[15px] pb-[15px]">
            <p className="text-xs md:text-sm lg:text-[16px] leading-[24px] font-normal text-center truncate">
              {name}
            </p>
            <h3 className="text-xs md:text-sm lg:text-[16px] leading-[24px] font-extrabold text-center text-[#000000]">
              {price} MMK
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
