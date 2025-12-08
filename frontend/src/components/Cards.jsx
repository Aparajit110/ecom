import React from 'react'

const Cards = ({ imgs , title , heading}) => {
  return (
    <div className="w-64 p-4 bg-white rounded-md shadow-md h-80">
  <h2 className="text-lg font-bold">{heading}</h2>

  <img
    className="object-cover w-full h-40 mt-3 rounded-md"
    src={imgs}
    alt="Card Image"
  />

  <h3 className="mt-4 text-blue-600 cursor-pointer">{title}</h3>
</div>

  )
}

export default Cards