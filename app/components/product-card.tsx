import Image from 'next/image'

type ProductCardProps = {
  image: string
  title: string
  price: string | number
  ordersClick?: () => void
}

export const ProductCard = ({
  image,
  title,
  price,
  ordersClick,
}: ProductCardProps) => {
  return (
    <div
      className="group w-full h-full bg-white lg:h-[209px] rounded-[16px] flex justify-center items-center 
                 shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] 
                 hover:shadow-[0_8px_25px_0_rgba(251,158,58,0.15)] 
                 hover:scale-105 hover:-translate-y-1
                 transition-all duration-300 ease-out
                 cursor-pointer border border-gray-100 hover:border-[#FB9E3A]/20
                 relative overflow-hidden"
      onClick={ordersClick}>
      
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FB9E3A]/0 to-[#FB9E3A]/0 
                      group-hover:from-[#FB9E3A]/5 group-hover:to-[#FB9E3A]/10 
                      transition-all duration-300 rounded-[16px]"></div>
      
      <div className="w-[110px] h-[178px] relative z-10">
        <div className="space-y-[12px]">
          <div className="relative overflow-hidden rounded-[12px] group-hover:scale-110 transition-transform duration-300">
            <Image 
              src={image} 
              width="110" 
              height="110" 
              alt="Product Image"
              className="rounded-[8px] group-hover:brightness-110 transition-all duration-300"
            />
          </div>
          
          <p className="text-xs md:text-sm lg:text-[16px] leading-[24px] font-medium text-[#2D3748] text-center
                       group-hover:text-[#FB9E3A] transition-colors duration-300">
            {title}
          </p>
          
          <h3 className="text-xs md:text-sm lg:text-[16px] leading-[24px] font-bold text-center text-[#1A202C]
                        group-hover:text-[#FB9E3A] group-hover:scale-105 transition-all duration-300">
            {price}
          </h3>
        </div>
      </div>
      
      {/* Add to cart indicator on hover */}
      <div className="absolute top-3 right-3 w-6 h-6 bg-[#FB9E3A] rounded-full flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0
                      transition-all duration-300">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>
  )
}

// lg:w-[180px] lg:h-[209px]
