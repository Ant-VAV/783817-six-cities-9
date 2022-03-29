import { AuthorizationStatus, City, SortType } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  changeSortType,
  setAuthStatusAction,
  setErrorAction,
  setPlaceListInfoAction,
  setPlaceReviewAction
} from './actions';
import { GlobalState } from '../types/state';

const initialState: GlobalState = {
  city: City.Paris,
  placeInfoList: [],
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
