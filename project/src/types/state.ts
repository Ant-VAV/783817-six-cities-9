import { store } from '../store';
import { AuthorizationStatus, City, SortType } from '../const';
import { PlaceInfo } from './client';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface GlobalState {
  city: City;
  placeInfoList: PlaceInfo[];
  currentPlaceInfoList: PlaceInfo[];
  sortType: SortType;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string;
}
