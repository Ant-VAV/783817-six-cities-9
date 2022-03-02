import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import leaflet from 'leaflet';
import { useMap } from '../../hooks/useMap';
import { MapPlaceLocation, PlaceLocation } from '../../types/client';

interface MapProps {
  initialCity: PlaceLocation;
  points: MapPlaceLocation[];
  activePlaceId: number
}

export function Map(props: MapProps) {
  const { initialCity, points, activePlaceId } = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, initialCity);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, { icon: activePlaceId === point.placeId ? currentIcon : defaultIcon })
          .addTo(map);
      },
      );
    }
  }, [map, points, activePlaceId]);

  return (
    <section className='cities__map map' ref={mapRef}/>
  );

}

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
