import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import { useMap } from '../../hooks/useMap';
import { MapPlaceLocation, PlaceLocation } from '../../types/client';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

interface MapProps {
  anchorPoint: PlaceLocation;
  points?: MapPlaceLocation[];
  activePlaceId?: number;
  isMainPage?: boolean
}

export function Map(props: MapProps) {
  const { anchorPoint, points, activePlaceId, isMainPage } = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, anchorPoint);
  const className = `${isMainPage ? 'cities' : 'property'}__map map`;

  useEffect(() => {
    if (map && points) {
      points.forEach((point) => (
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, { icon: activePlaceId === point.placeId ? currentIcon : defaultIcon })
          .addTo(map)
      ),
      );
    }
  }, [map, points, activePlaceId]);

  return (
    <section className={className} ref={mapRef}/>
  );

}

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconAnchor: [20, 40],
});

const currentIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconAnchor: [20, 40],
});
