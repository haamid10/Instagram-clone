import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = ({Posts}) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  // const { posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {Posts.map((st)=><Post  key={st.id}  story={st}/>
      )}
    </div>
  );
};

export default Posts;
