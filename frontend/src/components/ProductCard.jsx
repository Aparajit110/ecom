import React from 'react'

const ProductCard = ({productImg , Title , Price ,name}) => {
  return (
    <div className='flex flex-col p-3 m-2 border border-black rounded-lg'>
         <div className='flex gap-2'>
            <img className='h-60 w-50' src={productImg} />
            <div className='flex flex-col gap-2 p-3'>
                <h2>{name} , {Title}</h2>
                <h3>${Price}</h3>
            </div>
         </div>
    </div>
  )
}

export default ProductCard