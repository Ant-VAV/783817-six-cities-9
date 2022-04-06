import { Review } from '../../../types/client';
import { Rating } from '../../rating/rating';
import { getDateForAttribute } from '../../../date-helpers';

interface ReviewItemProps {
  review: Review
}

const dateOptions: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };

export function ReviewItem(props: ReviewItemProps) {
  const { review } = props;
  const { user } = review;
  const date = new Date(review.date);

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
        <time className='reviews__time' dateTime={getDateForAttribute(date)}>
          {date.toLocaleDateString('en-US', dateOptions)}
        </time>
      </div>
    </li>
  );
}
