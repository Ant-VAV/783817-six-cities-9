import { Review } from '../../../types/client';
import { Rating } from '../../rating/rating';

interface ReviewItemProps {
  review: Review
}

export function ReviewItem(props: ReviewItemProps) {
  const { review } = props;
  const { user } = review;
  const date = new Date(review.date);
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={user.avatarUrl} width='54' height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>
          {user.name}
        </span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <Rating rating={review.rating}/>
          </div>
        </div>
        <p className='reviews__text'>
          {review.comment}
        </p>
        <time className='reviews__time' dateTime='2019-04-24'>{date.toLocaleDateString('en-US', options)}</time>
      </div>
    </li>
  );
}
