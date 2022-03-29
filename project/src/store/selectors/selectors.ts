import { State } from '../../types/state';
import { AuthorizationStatus, City, SortType, StoreSpace } from '../../const';
import { PlaceInfo, Review } from '../../types/client';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[StoreSpace.User].authorizationStatus;
export const getIsDataLoaded = (state: State): boolean => state[StoreSpace.PlacesInfo].isDataLoaded;
export const getAllPlaces = (state: State): PlaceInfo[] => state[StoreSpace.PlacesInfo].placeInfoList;
export const getReviews = (state: State): Review[] => state[StoreSpace.PlacesInfo].placeReview;
export const getActiveCity = (state: State): City => state[StoreSpace.FilterParams].city;
export const getSortType = (state: State): SortType => state[StoreSpace.FilterParams].sortType;
export const getError = (state: State): string => state[StoreSpace.OtherActions].error;
