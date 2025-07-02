import React from 'react'

const ProductSearch = () => {
  return (
    <div className='flex-1 flex justify-end'>
      <input className='rounded-[40px] w-full min-w-[120px] lg:min-w-[200px] h-[48px] px-4 border border-[#939393] focus:right-0 focus:outline-none text-sm' type="text" placeholder='search your products' />
    </div>
  )
}

export default ProductSearch