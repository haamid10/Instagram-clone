// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `incrementLikes` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = ({ incrementLikes, likes}) => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  // const { incrementLikes, numberOfLikes } = props;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
    
          {/* Create an onClick function and pass the 'incrementLikes' property */}

        <div className='like-section-wrapper'>
          <FontAwesomeIcon onClick={()=>incrementLikes()} icon={faHeart} />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
    
          {/* Change this hard coded likes to like from props */}

      <p className='like-number'>{likes}likes</p>
    </div>
  );
};

export default LikeSection;
