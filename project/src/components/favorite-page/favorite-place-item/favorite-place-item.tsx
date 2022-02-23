import { FavoriteCard } from '../favorite-card/favorite-card';
import { PlaceInfoList } from '../../../types/client';

interface FavoritePlaceItemProps {
  placeInfoList: PlaceInfoList;
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
              <a className='locations__item-link' href='/#'>
                <span>{city}</span>
              </a>
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
