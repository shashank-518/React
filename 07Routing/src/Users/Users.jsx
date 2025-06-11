import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {

    const {id} = useParams('id')
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default Users
