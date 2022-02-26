import { Link } from 'react-router-dom';
import { PlaceInfo } from '../../types/client';
import { capitaliseFirstLetter, getPlaceHref } from '../../helpers';
import { Rating } from '../rating/rating';
import { PlacePrice } from './place-price';

interface PlaceCardProps {
  placeInfo: PlaceInfo;
  onSetActive: (id: number) => void;
}

export function PlaceCard(props: PlaceCardProps) {
  const { placeInfo, onSetActive } = props;

  const handleMouseOver = () => {
    onSetActive(placeInfo.id);
  };

  return (
    <article className='cities__place-card place-card' onMouseOver={handleMouseOver}>
      {placeInfo.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={getPlaceHref(placeInfo.id)}>
          <img
            className='place-card__image' src={placeInfo.previewImage} width='260' height='200'
            alt='Place card img'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <PlacePrice price={placeInfo.price}/>
          <button
            className={`place-card__bookmark-button button ${placeInfo.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'/>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
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
