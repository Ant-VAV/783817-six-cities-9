import { PlaceInfo } from '../../../types/client';
import { PlaceCard } from '../../place-card/place-card';

interface NearPlacesProps {
  nearPlaces: PlaceInfo[];
}

export function NearPlaces(props: NearPlacesProps) {
  const { nearPlaces } = props;

  return (
    <div className='container'>
      {nearPlaces && (
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            {nearPlaces.map((place) => (
              <PlaceCard isNearPlaces placeInfo={place} key={place.id}/>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
