import React from 'react'
import { ProductCard } from './product-card'

const dummyProducts = [
  { image: '/images/tomato.png', title: 'Tomato', price: "1500 MMK "},
  { image: '/images/tomato.png', title: 'Potato', price: "1200 MMK" },
  { image: '/images/tomato.png', title: 'Onion', price: "1000 MMK" },
  { image: '/images/tomato.png', title: 'Carrot', price: "1800 MMK" },
  { image: '/images/tomato.png', title: 'Cabbage', price: "1300 MMK" },
  { image: '/images/tomato.png', title: 'Lettuce', price: "1600 MMK" },
  { image: '/images/tomato.png', title: 'Pepper', price: "2000 MMK" },
  { image: '/images/tomato.png', title: 'Eggplant', price: "1700 MMK" },
  { image: '/images/tomato.png', title: 'Cucumber', price: "1100 MMK"},
  { image: '/images/tomato.png', title: 'Garlic', price: "900 MMK"},
]

const ProductList = () => {
  return (
    <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[17px] lg:gap-[20px]'>
        {dummyProducts.map((product, i) => (
          <ProductCard
            key={i}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
    </div>
  )
}

export default ProductList