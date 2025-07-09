'use client'
import React from 'react'
import { ProductCard } from './product-card'
import { useDispatch } from 'react-redux'
import { addOrder } from '../store/slices/orderSummarySlice'

const dummyProducts = [
  { id: 1, image: '/images/tomato.png', title: 'Tomato', price: '1500 MMK' },
  { id: 2, image: '/images/tomato.png', title: 'Potato', price: '1200 MMK' },
  { id: 3, image: '/images/tomato.png', title: 'Onion', price: '1000 MMK' },
  { id: 4, image: '/images/tomato.png', title: 'Carrot', price: '1800 MMK' },
  { id: 5, image: '/images/tomato.png', title: 'Cabbage', price: '1300 MMK' },
  { id: 6, image: '/images/tomato.png', title: 'Lettuce', price: '1600 MMK' },
  { id: 7, image: '/images/tomato.png', title: 'Pepper', price: '2000 MMK' },
  { id: 8, image: '/images/tomato.png', title: 'Eggplant', price: '1700 MMK' },
  { id: 9, image: '/images/tomato.png', title: 'Cucumber', price: '1100 MMK' },
  { id: 10, image: '/images/tomato.png', title: 'Garlic', price: '900 MMK' },
]

const ProductList = () => {
  interface Product {
    id: number
    image: string
    title: string
    price: string
  }

  const dispatch = useDispatch()

  return (
    <div className="h-full relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/80 pointer-events-none"></div>
      
      {/* Product grid */}
      <div className="relative z-10 h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                      gap-4 sm:gap-5 lg:gap-6 overflow-y-auto no-scrollbar p-1
                      animate-fadeIn scroll-smooth">
        {dummyProducts.map((product, i) => (
          <div 
            key={product.id}
            className="animate-slideUp"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              ordersClick={() => dispatch(addOrder(product))}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
