import { Link } from 'react-router-dom';
import { PlaceInfo } from '../../types/client';
import { capitaliseFirstLetter, getPlaceHref, NeverError } from '../../helpers';
import { Rating } from '../rating/rating';
import { PlacePrice } from './place-price';
import { PlaceFavoriteButton } from './place-favorite-button';
import { PlaceCardPosition } from '../../const';

interface PlaceCardProps {
  placeInfo: PlaceInfo;
  onSetActivePlaceId?: (id: number) => void;
  cardPosition: PlaceCardPosition;
}

export function PlaceCard(props: PlaceCardProps) {
  const { placeInfo, onSetActivePlaceId, cardPosition } = props;
  const { isPremium, id, previewImage, price, isFavorite, rating, title, type } = placeInfo;

  const getClassStyle = () => {
    switch (cardPosition) {
      case PlaceCardPosition.NearPlaces:
      case PlaceCardPosition.Favorites:
        return `${cardPosition}__card`;
      case PlaceCardPosition.Cities:
        return `${cardPosition}__place-card`;
      default:
        throw new NeverError(cardPosition);
    }
  };

  const getImagePreviewStyle = () => {
    switch (cardPosition) {
      case PlaceCardPosition.Cities:
      case PlaceCardPosition.NearPlaces:
        return { width: 260, height: 200 };
      case PlaceCardPosition.Favorites:
        return { width: 150, height: 110 };
      default:
        throw new NeverError(cardPosition);
    }
  };

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
    <article className={`${getClassStyle()} place-card`} onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && cardPosition !== PlaceCardPosition.Favorites && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardPosition}__image-wrapper place-card__image-wrapper`}>
        <Link to={getPlaceHref(id)}>
          <img
            className='place-card__image' src={previewImage} style={getImagePreviewStyle()}
            alt='Place card img'
          />
        </Link>
      </div>
      <div className={`${cardPosition === PlaceCardPosition.Favorites ? 'favorites__card-info' : ''} place-card__info`}>
        <div className='place-card__price-wrapper'>
          <PlacePrice price={price}/>
          <PlaceFavoriteButton isFavorite={isFavorite} placeId={id}
            onRefresh={onRefresh}
          />
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
