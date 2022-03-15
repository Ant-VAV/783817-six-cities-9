import { City, SortType } from '../const';
import { getFilteredPlaceListInfo, getPlaceListInfo } from '../mocks/place-list-info';
import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, changeSortType, getPlaceListInfoAction } from './actions';
import { State } from '../types/client';

const initialState: State = {
  city: City.Paris,
  placeInfoList: getPlaceListInfo(),
  sortType: SortType.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload || initialState.city;
    })
    .addCase(getPlaceListInfoAction, (state, action) => {
      state.placeInfoList = getFilteredPlaceListInfo(state.city, state.sortType);
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload || initialState.sortType;
    });
});
