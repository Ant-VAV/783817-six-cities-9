import React, { useEffect } from 'react';
import { ReviewForm } from '../review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/state';
import { AuthorizationStatus } from '../../../const';
import { fetchPlaceReviewAction } from '../../../store/api-actions';
import { getAuthorizationStatus, getReviews } from '../../../store/selectors/selectors';
import { ReviewItem } from '../review-item/review-item';
import { dateSortFunction } from '../../../date-helpers';

interface ReviewsProps {
  placeId: number;
}

export function ReviewsBlock(props: ReviewsProps) {
  const { placeId } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Authorized;

  useEffect(() => {
    dispatch(fetchPlaceReviewAction(placeId.toString()));
  }, [placeId, dispatch]);

  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews?.length || 0}</span>
      </h2>
      {reviews && (
        <ul className='reviews__list'>
          {[...reviews]
            .sort((a, b) => dateSortFunction(a.date, b.date))
            .slice(0, 10)
            .map((review) => <ReviewItem review={review} key={review.id}/>)}
        </ul>
      )}
      {isLoggedIn && (
        <ReviewForm placeId={placeId.toString()}/>
      )}
    </section>
  );
}
