import { store } from '../store';
import { AuthorizationStatus, City, SortType } from '../const';
import { PlaceInfo, Review } from './client';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface UserProcess {
  authorizationStatus: AuthorizationStatus;
}

export interface PlacesData {
  placeInfoList: PlaceInfo[];
  placeReview: Review[];
  isDataLoaded: boolean;
}

export interface FilterParams {
  city: City;
  sortType: SortType;
}

export interface OtherActions {
  error: string;
}
