import React from 'react'

const Card = () => {
  return (
    <div class="max-w-sm mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-4 text-center">
  <img 
    class="w-full h-64 object-cover rounded-xl"  
    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" 
    alt="Profile image" 
  />
  <h1 class="text-2xl font-bold text-gray-800">Shashank S</h1>
  <p class="text-gray-600 text-base">Lorem, ipsum. lorem6</p>
</div>

  )
}

export default Card
