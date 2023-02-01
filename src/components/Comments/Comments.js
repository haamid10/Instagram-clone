import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = ({comments}) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  // const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      <h2>{comments.map((comment)=>(
        <comment comment={comment}/>
      ))}</h2>
    </div>
  );
};

export default Comments;
