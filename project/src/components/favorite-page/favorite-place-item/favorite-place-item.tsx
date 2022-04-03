import { PlaceInfo } from '../../../types/client';
import { Link } from 'react-router-dom';
import { PlaceCardPosition } from '../../../const';
import { PlaceCard } from '../../place-card/place-card';

interface FavoritePlaceItemProps {
  placeInfoList: PlaceInfo[];
  city: string;
  onRefresh: () => void;
}

export function FavoritePlaceItem(props: FavoritePlaceItemProps) {
  const { placeInfoList, city, onRefresh } = props;

  return (
    placeInfoList.length > 0
      ? (
        <li className='favorites__locations-items'>
          <div className='favorites__locations locations locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to={`/${city}`}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className='favorites__places'>
            {placeInfoList.map((place) => (
              <PlaceCard placeInfo={place} key={place.id}
                cardPosition={PlaceCardPosition.Favorites}
                onRefresh={onRefresh}
              />
            ))}
          </div>
        </li>
      )
      : null
  );
}
