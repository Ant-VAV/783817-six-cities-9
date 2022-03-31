import { combineReducers } from '@reduxjs/toolkit';
import { StoreSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { placeData } from './places-data/places-data';
import { filterParams } from './filter-params/filter-params';
import { otherActions } from './other-actions/other-actions';

export const rootReducer = combineReducers({
  [StoreSpace.User]: userProcess.reducer,
  [StoreSpace.PlacesInfo]: placeData.reducer,
  [StoreSpace.FilterParams]: filterParams.reducer,
  [StoreSpace.OtherActions]: otherActions.reducer,
});
