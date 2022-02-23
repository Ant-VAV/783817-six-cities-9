import { PlaceInfo } from '../../../types/client';
import { Link } from 'react-router-dom';
import { capitaliseFirstLetter, getPlaceHref } from '../../../helpers';
import { Rating } from '../../rating/rating';
import { PlacePrice } from '../../place-card/place-price';

interface FavoriteCardProps {
  placeInfo: PlaceInfo;
}

export function FavoriteCard(props: FavoriteCardProps) {
  const { placeInfo } = props;
  return (
    <article className='favorites__card place-card'>
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={getPlaceHref(placeInfo.id)}>
          <img className='place-card__image' src={placeInfo.previewImage} width='150' height='110'
            alt='Place img'
          />
        </Link>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <PlacePrice price={placeInfo.price}/>
          <button className='place-card__bookmark-button place-card__bookmark-button--active button'
            type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'/>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <Rating rating={placeInfo.rating}/>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={getPlaceHref(placeInfo.id)}>{placeInfo.title}</Link>
        </h2>
        <p className='place-card__type'>{capitaliseFirstLetter(placeInfo.type)}</p>
      </div>
    </article>
  );
}
