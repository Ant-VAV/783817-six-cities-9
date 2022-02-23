import React from 'react';
import { getPlaceRating } from '../../helpers';

interface RatingProps {
  rating: number;
}

export function Rating(props: RatingProps) {
  const {rating} = props;
  return (
    <>
      <span style={{ width: `${getPlaceRating(rating)}%` }}/>
      <span className='visually-hidden'>Rating</span>
    </>
  );
}
