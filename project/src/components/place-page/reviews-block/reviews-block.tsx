import React, { useEffect, useState } from 'react';
import { Review } from '../../../types/client';
import { getReviews } from '../../../mocks/reviews';
import { ReviewItem } from '../review-item/review-item';
import { ReviewForm } from '../review-form/review-form';

interface ReviewsProps {
  isLoggedIn: boolean;
  placeId: number;
}

export function ReviewsBlock(props: ReviewsProps) {
  const { isLoggedIn, placeId } = props;
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    if (placeId === 1) {
      setReviews(getReviews());
      return;
    }
    setReviews([]);
  }, [placeId]);


  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews?.length || 0}</span>
      </h2>
      {reviews && (
        <ul className='reviews__list'>
          {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
        </ul>
      )}
      {isLoggedIn && (
        <ReviewForm/>
      )}
    </section>
  );
}
