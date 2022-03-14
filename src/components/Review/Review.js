import React from 'react'
import './review.scss';
import ReviewCard from './ReviewCard/ReviewCard';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Review = () => {
  return (
    <div data-aos="fade-up" className="review">
      <div className="review-name">
        <h1 className="review-title">Отзывы</h1>
        <h2 className="review-subtitle">Смотреть все</h2>
      </div>
      <ReviewCard />
    </div>
  );
}

export default Review