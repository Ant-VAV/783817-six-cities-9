import { City, SortType } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, changeSortType, getCurrentPlaceListInfoAction, setPlaceListInfoAction } from './actions';
import { State } from '../types/client';
import { getFilteredPlaceListInfo } from '../helpers';

const initialState: State = {
  city: City.Paris,
  placeInfoList: [],
  currentPlaceInfoList: [],
  sortType: SortType.Popular,
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload || initialState.city;
    })
    .addCase(getCurrentPlaceListInfoAction, (state, action) => {
      state.currentPlaceInfoList = getFilteredPlaceListInfo(state.placeInfoList, state.city, state.sortType);
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload || initialState.sortType;
    })
    .addCase(setPlaceListInfoAction, (state, action) => {
      state.placeInfoList = action.payload;
      state.isDataLoaded = true;
    });
});
