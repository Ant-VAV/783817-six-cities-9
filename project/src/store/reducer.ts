import { AuthorizationStatus, City, SortType } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  changeSortType,
  getCurrentPlaceListInfoAction,
  setAuthStatusAction,
  setErrorAction,
  setPlaceListInfoAction,
  setPlaceReviewAction,
} from './actions';
import { GlobalState } from '../types/state';
import { getFilteredPlaceListInfo } from '../helpers';

const initialState: GlobalState = {
  city: City.Paris,
  placeInfoList: [],
  currentPlaceInfoList: [],
  placeReview: [],
  sortType: SortType.Popular,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
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
    })
    .addCase(setPlaceReviewAction, (state, action) => {
      state.placeReview = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
