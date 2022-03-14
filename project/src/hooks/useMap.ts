import { RefObject, useEffect, useState } from 'react';
import leaflet from 'leaflet';
import { PlaceLocation } from '../types/client';

export function useMap(mapRef: RefObject<HTMLDivElement>, city: PlaceLocation) {
  const [map, setMap] = useState<leaflet.Map>();

  useEffect(() => {
    if (mapRef.current !== null) {
      if (!map) {
        const instance = leaflet.map(mapRef.current, {
          center: {
            lat: city.latitude,
            lng: city.longitude,
          },
          zoom: city.zoom,
        });

        leaflet
          .tileLayer(
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          )
          .addTo(instance);

        setMap(instance);
      } else {
        map.setView({
          lat: city.latitude,
          lng: city.longitude,
        }, city.zoom);
      }
    }
  }, [mapRef, map, city]);

  return map;
}
