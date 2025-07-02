import Image from "next/image"

type ProductCardProps = {
  image: string
  title: string
  price: string | number
}

export const ProductCard = ({image, title, price}: ProductCardProps) => {
  return (
    <div className='w-full h-full bg-[#F6F6F6] lg:h-[209px] rounded-[12px] flex justify-center items-center shadow-[0_5px_15px_0_rgba(0,0,0,0.05)]'>
        <div className='w-[110px] h-[178px]'>
            <div className='space-y-[10px]'>
                <Image
                    src={image}
                    width="110"
                    height="110"
                    alt='Product Image'
                />
                <p className='text-[16px] leading-[24px] font-normal text-[#000000] text-center'>{title}</p>
                <h3 className='text-[16px] leading-[24px] font-bold text-center text-[#000000]'>{price}</h3>
            </div>
        </div>
    </div>
  )
}

// lg:w-[180px] lg:h-[209px]