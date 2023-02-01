import React from 'react'
import './Posts.css';
import Post from './Post'

const Hello = ({posts}) => {
  // console.log(posts)
  return (
    <div className='posts-container-wrapper'>
      <h1>{posts.map((pst)=>(
       <Post post={pst} />
      ))}</h1>
    </div>
  )
}

export default Hello
// 503444