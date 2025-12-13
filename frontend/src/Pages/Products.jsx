import React from 'react'
import ProductCard from '../components/ProductCard'
import productData from '../data/productData'

const Products = () => {
  return (
    <div className='w-screen min-h-80'>
        <h1 className='text-2xl'>Results</h1>
        {productData.map(item=>(
            <ProductCard key={item.id}  productImg={item.image} Title={item.desc} Price={item.price} name={item.name} />
        ))}
            
    </div>
  )
}

export default Products