import { FavoriteCard } from '../favorite-card/favorite-card';
import { PlaceInfo } from '../../../types/client';

interface FavoritePlaceItemProps {
  placeInfoList: PlaceInfo[];
  city: string
}

export function FavoritePlaceItem(props: FavoritePlaceItemProps) {
  const { placeInfoList, city } = props;

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
            {placeInfoList.map((place) => <FavoriteCard placeInfo={place} key={place.id}/>)}
          </div>
        </li>
      )
      : null
  );
}
