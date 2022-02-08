import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
  return (
    <div className='list-card'>
      <div className="card-comment mb-3">
        <div className="card-header ">
          <span className="text-light">Comments</span>
        </div>
        <div className="card-body">
          {comments.length > 0 ? (
            comments.map(comment => (
              <div className='indiv-comment mt-3'>
                <h4 className='fs-5'> by {comment.username} <span className='comment-date'>on {comment.createdAt}</span></h4>
                <p className="pill mb-3" key={comment._id}>
                  {comment.commentBody}
                </p>
              </div>
            ))
          ) : 
            <div>No comments yet!</div>
          }
        </div>
      </div>
    </div>

  );
};

export default CommentList;