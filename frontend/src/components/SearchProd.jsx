
const SearchProd = ({product, setCartItems }) => {
     const { cloudinaryImage, name, description, price } = product;
     


     const cartPushing = () => {
  setCartItems(prev => [
    ...prev,
    { cloudinaryImage, name, price }
  ])
}


  return (
    <div className='flex flex-col gap-2 my-2 max-1 '>
        <div className='flex w-screen border border-black h-40px'>
             <img src={cloudinaryImage} className="object-cover w-40 h-40" />
            <div className='flex items-center justify-between w-full p-4'>
                <div className='flex flex-col'> 
                <h2>{name},{description}</h2>
                <h3>{price}</h3>
                </div>
                <div>
                    <button onClick={cartPushing}>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProd