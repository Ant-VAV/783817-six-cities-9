import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useState } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import leaflet from 'leaflet';
import { useMap } from '../../hooks/useMap';
import { MapPlaceLocation, PlaceLocation } from '../../types/client';

interface MapProps {
  anchorPoint: PlaceLocation;
  points?: MapPlaceLocation[];
  activePlaceId?: number;
  isMainPage?: boolean
}

export function Map(props: MapProps) {
  const { anchorPoint, points, activePlaceId, isMainPage } = props;
  const [layers, setLayers] = useState<leaflet.Marker[]>();
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, anchorPoint);
  const className = `${isMainPage ? 'cities' : 'property'}__map map`;

  useEffect(() => {
    if (map && points) {
      const markers = points.map((point) => (
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, { icon: activePlaceId === point.placeId ? currentIcon : defaultIcon })
          .addTo(map)
      ),
      );
      setLayers(markers);
    }
    return () => {
      if (layers) {
        layers.forEach((layer) => layer.remove());
      }
    };
  }, [map, points, activePlaceId, layers]);

  return (
    <section className={className} ref={mapRef}/>
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
