import { PlaceInfo } from '../types/client';
import { getPlaceListInfo } from './place-list-info';

export const getPlaceInfo = (id: string | undefined): PlaceInfo | undefined =>
  id ? getPlaceListInfo().find((place) => place.id === parseInt(id, 10)) : undefined;
