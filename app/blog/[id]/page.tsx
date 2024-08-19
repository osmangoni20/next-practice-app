import React from 'react'
import { useParams } from 'next/navigation'

export default function BlogPage({params}:{params:any}) {
    const{id}=params
  return (
    <div className='mt-5'>
      <h1>This blog id is {id}</h1>
    </div>
  )
}
