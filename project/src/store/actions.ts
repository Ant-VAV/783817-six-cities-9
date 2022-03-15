import { createAction } from '@reduxjs/toolkit';
import { StoreAction } from '../const';

export const changeCityAction = createAction(StoreAction.ChangeCity, (value) => ({ payload: value }));
export const getPlaceListInfoAction = createAction(StoreAction.GetPlaceInfo);
export const changeSortType = createAction(StoreAction.ChangeSortType, (value) => ({ payload: value }));
