import React from 'react'

type CategoryCardProps = {
    active?: boolean
    title: string
}

const CategoryCard = ({active = false, title}: CategoryCardProps) => {
  return (
    <div className={`w-fit h-[48px] rounded-[5px] p-2.5 text-center text-[#9E9E9E] flex-shrink-0 text-xs md:text-sm lg:text-[16px] flex justify-center items-center ${active ? 'bg-[#FB9E3A] text-white': ''}`}>{title}</div>
  )
}

export default CategoryCard