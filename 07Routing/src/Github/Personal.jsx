import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Personal =  () => {

    const {username} = useParams()
    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const res = await response.json(); // ✅ Await this
        setData(res);
      } catch (err) {
        console.error('Error fetching GitHub user:', err);
      }
    };

    fetchData();

    },[username])

  return (
    <div>
        <h1>{data['login']}</h1>
        <img src={data["avatar_url"]} alt="" />
      
    </div>
  )
}

export default Personal



