import { PlaceInfo } from '../../../types/client';
import { PlaceCard } from '../../place-card/place-card';

interface NearPlacesProps {
  nearPlaces: PlaceInfo[];
  onSetActivePlaceId: (id: number) => void;
}

export function NearPlaces(props: NearPlacesProps) {
  const { nearPlaces, onSetActivePlaceId } = props;

  return (
    <div className='container'>
      {nearPlaces && (
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            {nearPlaces.map((place) => (
              <PlaceCard isNeraPlaces placeInfo={place} onSetActivePlaceId={onSetActivePlaceId} key={place.id}/>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
