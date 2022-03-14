import { createAction } from '@reduxjs/toolkit';
import { StoreActions } from '../const';

export const changeCityAction = createAction(StoreActions.CHANGE_CITY, (value) => ({ payload: value }));
export const getPlaceListInfoAction = createAction(StoreActions.GET_PLACES_INFO, (value) => ({ payload: value }));
