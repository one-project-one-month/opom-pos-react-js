import React from 'react'
import CategoryCard from './category-card';

const dummyCategories = [
  { title: 'Vegetables and fruits', active: true },
  { title: 'Fruits' },
  { title: 'Meat' },
  { title: 'Seafood' },
  { title: 'Dairy' },
  { title: 'Bakery' },
  { title: 'Beverages' },
  { title: 'Snacks' },
  { title: 'Frozen' },
  { title: 'Others' },
]

const CategoryList = () => {
  return (
    <div className='flex gap-[10px] overflow-x-auto no-scrollbar'>
        {dummyCategories.map((cat, idx) => (
            <CategoryCard key={idx} title={cat.title} active={cat.active} />
        ))}
    </div>
  )
}

export default CategoryList;