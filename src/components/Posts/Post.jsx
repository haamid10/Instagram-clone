import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = ({post})=> {
  // 🔥 Make sure the parent of Post is passing the right props!
  // console.log(post ,'ssoo')
  
  // This is the state for the likes, if you pass the state correctly, the heart button should increase the likes
  
    const [likes, setLikes] = useState(post);
    
 // Function to increase the number of likes
  
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className='post-border'>
      <PostHeader
        username={post}
        thumbnailUrl={post}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likes={likes} incrementLikes={incrementLikes} />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
