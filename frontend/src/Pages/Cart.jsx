import React from 'react'


const Cart = ({closeCart,cartItems}) => {


  return (
    <div className="fixed top-0 right-0 z-50 w-1/3 min-h-screen bg-white rounded-lg shadow-lg ">
      <h1 className="p-4 text-xl font-bold">Cart</h1>
      <h1 onClick={closeCart} className="p-4 text-xl font-bold">back</h1>
      
      {cartItems.map((item, index) => (
  <div key={index} className="flex gap-4 p-4 border-b">
    <img
      src={item.cloudinaryImage}
      alt={item.name}
      className="object-cover w-16 h-16"
    />
    <div>
      <p className="font-semibold">{item.name}</p>
      <p>₹{item.price}</p>
    </div>
  </div>
))}

    </div>
  )
}


export default Cart