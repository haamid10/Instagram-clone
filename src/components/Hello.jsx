import React from 'react'
import Feew from './Feew'

const Hello = ({posts}) => {
  console.log(posts)
  return (
    <div>
      <h1>siuu</h1>
      <h1>{posts.map((pst)=>(
       <Feew post={pst} />
      ))}</h1>
    </div>
  )
}

export default Hello
// 503444