import { store } from '../store';
import { AuthorizationStatus, City, SortType } from '../const';
import { PlaceInfo, Review } from './client';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface GlobalState {
  city: City;
  placeInfoList: PlaceInfo[];
  placeReview: Review[];
  sortType: SortType;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string;
}
