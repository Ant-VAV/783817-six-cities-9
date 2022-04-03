import { PlaceInfo } from '../../../types/client';
import { PlaceCard } from '../../place-card/place-card';
import { PlaceCardPosition } from '../../../const';

interface NearPlacesProps {
  nearPlaces: PlaceInfo[];
  onRefresh: () => void;
}

export function NearPlaces(props: NearPlacesProps) {
  const { nearPlaces, onRefresh } = props;

  return (
    <div className='container'>
      {nearPlaces && (
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            {nearPlaces.map((place) => (
              <PlaceCard placeInfo={place} key={place.id} cardPosition={PlaceCardPosition.NearPlaces}
                onRefresh={onRefresh}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
