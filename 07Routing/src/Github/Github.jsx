import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

  return (
    <div>

        <h1>{data['login']}</h1>
        <img src={data['avatar_url']} alt="" />
      
    </div>
  )
}

export default Github


export const fetchapicall = async()=>{
     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}