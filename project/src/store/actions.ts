import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, StoreAction } from '../const';
import { PlaceInfo } from '../types/client';
import { PlaceInfo, Review } from '../types/client';

export const changeCityAction = createAction(StoreAction.ChangeCity, (value) => ({ payload: value }));
export const changeSortType = createAction(StoreAction.ChangeSortType, (value) => ({ payload: value }));

export const getCurrentPlaceListInfoAction = createAction(StoreAction.GetCurrentPlaceInfo);
export const setPlaceListInfoAction = createAction<PlaceInfo[]>(StoreAction.SetPlaceInfoList);

export const setPlaceReviewAction = createAction<Review[]>(StoreAction.SetPlaceReview);

export const setAuthStatusAction = createAction<AuthorizationStatus>(StoreAction.SetAuthStatus);
export const setErrorAction = createAction<string>(StoreAction.SetErrorAction);
