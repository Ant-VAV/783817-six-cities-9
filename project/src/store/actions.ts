import { createAction } from '@reduxjs/toolkit';
import { StoreAction } from '../const';
import { PlaceInfo } from '../types/client';

export const changeCityAction = createAction(StoreAction.ChangeCity, (value) => ({ payload: value }));
export const getCurrentPlaceListInfoAction = createAction(StoreAction.GetCurrentPlaceInfo);
export const changeSortType = createAction(StoreAction.ChangeSortType, (value) => ({ payload: value }));
export const setPlaceListInfoAction = createAction<PlaceInfo[]>(StoreAction.SetPlaceInfo);
