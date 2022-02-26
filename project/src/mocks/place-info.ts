import { PlaceInfo } from '../types/client';
import { getPlaceListInfo } from './place-list-info';

export const getPlaceInfo = (id: string): PlaceInfo | undefined =>
  getPlaceListInfo().find((place) => place.id === parseInt(id, 10));
