import { Link } from 'react-router-dom';
import { PlaceInfo } from '../../types/client';
import { capitaliseFirstLetter, getPlaceHref } from '../../helpers';
import { Rating } from '../rating/rating';
import { PlacePrice } from './place-price';
import { PlaceFavoriteButton } from './place-favorite-button';

interface PlaceCardProps {
  placeInfo: PlaceInfo;
  isNearPlaces?: boolean;
  onSetActivePlaceId?: (id: number) => void;
}

export function PlaceCard(props: PlaceCardProps) {
  const { placeInfo, onSetActivePlaceId, isNearPlaces = false } = props;
  const { isPremium, id, previewImage, price, isFavorite, rating, title, type } = placeInfo;

  const classStyle = isNearPlaces ? 'near-places' : 'cities';

  const handleMouseOver = () => {
    if (onSetActivePlaceId) {
      onSetActivePlaceId(id);
    }
  };

  const handleMouseLeave = () => {
    if (onSetActivePlaceId) {
      onSetActivePlaceId(-1);
    }
  };

  return (
    <article className={`${classStyle}__place-card place-card`} onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className={`${classStyle}__image-wrapper place-card__image-wrapper`}>
        <Link to={getPlaceHref(id)}>
          <img
            className='place-card__image' src={previewImage} width='260' height='200'
            alt='Place card img'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <PlacePrice price={price}/>
          <PlaceFavoriteButton isFavorite={isFavorite} placeId={id}/>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <Rating rating={rating}/>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={getPlaceHref(id)}>{title}</Link>
        </h2>
        <p className='place-card__type'>{capitaliseFirstLetter(type)}</p>
      </div>
    </article>
  );
}
