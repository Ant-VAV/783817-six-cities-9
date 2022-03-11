import { City } from '../const';
import { getPlaceListInfo, getPlaceListInfoByCity } from '../mocks/place-list-info';
import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, getPlaceListInfoAction } from './actions';
import { State } from '../types/client';

const initialState: State = {
  city: City.Paris,
  placeInfoList: getPlaceListInfo(),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload || initialState.city;
    })
    .addCase(getPlaceListInfoAction, (state, action) => {
      state.placeInfoList = getPlaceListInfoByCity((action.payload as any) as City);
    });
});
