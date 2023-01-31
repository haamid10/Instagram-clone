import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = ({posts}) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  console.log(posts ,'suii')




  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        posts.map((post)=>(
          <Post post={post}/>
        ))
      }
      
    </div>
  );
};

export default Posts;
