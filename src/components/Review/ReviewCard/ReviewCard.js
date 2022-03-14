import React from 'react'
import './reviewCard.scss';

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div>
        <img className="rc-img" src="img/para.png" alt="" />
      </div>
      <div className='review-card-text'>
        <h1 className="rc-name">Иван Иванов, 25 лет</h1>
        <p className="rc-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard