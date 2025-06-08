import React from 'react'

const Card = ({img , name}) => {
  return (
    <div class="max-w-sm mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-4 text-center">
  <img 
    class="w-full h-64 object-cover rounded-xl"  
    src= {img}
    alt="Profile image" 
  />
  <h1 class="text-2xl font-bold text-gray-800">{name}</h1>
  <p class="text-gray-600 text-base">Lorem, ipsum. lorem6</p>
</div>

  )
}

export default Card
