import React from 'react'

type CategoryCardProps = {
    active?: boolean
    title: string
}

const CategoryCard = ({active = false, title}: CategoryCardProps) => {
  return (
    <div className={`w-[170px] h-[48px] rounded-[5px] p-[10px] text-center text-[#9E9E9E] flex-shrink-0 ${active ? 'bg-[#FB9E3A] text-white': ''}`}>{title}</div>
  )
}

export default CategoryCard