import React from 'react'
import Cards from './Cards'
import data from '../data/HeroData'

const Hero = () => {
  return (
   <div className="grid min-h-screen grid-cols-4 gap-2 p-3 bg-green-50">
  {data.slice(0, 8).map((item, i) => (
    <Cards
      key={i}
      imgs={item.imgs}
      title={item.title}
      heading={item.heading}
    />
  ))}
</div>

  )
}

export default Hero